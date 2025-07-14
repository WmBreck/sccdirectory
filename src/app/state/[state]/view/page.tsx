"use client";

import { getStateFullName } from "../../../../utils/stateNames";
import BackButton from "../../../../components/BackButton";
import { useSearchParams, useParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function StateViewPage() {
  const params = useParams();
  const searchParams = useSearchParams();
  const abbr = params.state as string;
  const fullName = getStateFullName(abbr);
  const url = searchParams.get("url");
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [iframeFailed, setIframeFailed] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [hasOpenedNewWindow, setHasOpenedNewWindow] = useState(false);

  const checkIframeContent = () => {
    if (!iframeRef.current || !url) return false;
    
    try {
      const iframeDoc = iframeRef.current.contentDocument || iframeRef.current.contentWindow?.document;
      if (!iframeDoc) return false;
      
      const bodyText = iframeDoc.body.innerHTML.toLowerCase();
      const title = iframeDoc.title.toLowerCase();
      
      // Check for various error indicators
      const errorIndicators = [
        'denied', 'refused', 'blocked', 'forbidden', 'not allowed',
        'x-frame-options', 'content security policy', 'clickjacking',
        'access denied', 'access blocked', 'cannot display',
        'security policy', 'frame options', 'embedding disabled'
      ];
      
      // Check if any error indicators are present
      const hasError = errorIndicators.some(indicator => 
        bodyText.includes(indicator) || title.includes(indicator)
      );
      
      // Check if the page is essentially blank or just shows an error
      const isBlank = bodyText.trim() === '' || bodyText.length < 100;
      
      return hasError || isBlank;
    } catch (error) {
      // Cross-origin error - check if iframe src changed (indicates redirect/error)
      const currentSrc = iframeRef.current.src;
      return currentSrc !== url;
    }
  };

  useEffect(() => {
    if (!url) return;

    const timeout = setTimeout(() => {
      if (iframeRef.current && !hasOpenedNewWindow) {
        const hasError = checkIframeContent();
        
        if (hasError) {
          setIframeFailed(true);
          setHasOpenedNewWindow(true);
          window.open(url, '_blank');
        }
      }
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, [url, hasOpenedNewWindow]);

  const handleIframeError = () => {
    if (!hasOpenedNewWindow && url) {
      setIframeFailed(true);
      setHasOpenedNewWindow(true);
      window.open(url, '_blank');
    }
  };

  const handleIframeLoad = () => {
    setIsLoading(false);
    
    // Check content after load
    setTimeout(() => {
      if (iframeRef.current && !hasOpenedNewWindow && url) {
        const hasError = checkIframeContent();
        
        if (hasError) {
          setIframeFailed(true);
          setHasOpenedNewWindow(true);
          window.open(url, '_blank');
        }
      }
    }, 1000);
  };

  if (!url) {
    return (
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-200 via-purple-200 to-pink-200">
        <div className="flex-1 flex flex-col items-center justify-center py-12 px-4">
          <div className="w-full max-w-4xl lg:max-w-6xl bg-white/30 backdrop-blur-md rounded-3xl shadow-2xl p-8 border border-white/40 text-center">
            <BackButton />
            <h1 className="text-2xl font-bold mb-8 text-gray-900 drop-shadow">No URL provided</h1>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-200 via-purple-200 to-pink-200">
      <div className="flex-1 flex flex-col items-center justify-center py-12 px-4">
        <div className="w-full max-w-4xl lg:max-w-6xl bg-white/30 backdrop-blur-md rounded-3xl shadow-2xl p-8 border border-white/40 flex flex-col" style={{ minHeight: '80vh' }}>
          <BackButton />
          <h1 className="text-2xl font-bold mb-4 text-center text-gray-900 drop-shadow">
            {fullName} Resource Viewer
          </h1>
          <div className="flex-1 flex flex-col items-center justify-center w-full mb-8">
            {iframeFailed ? (
              <div className="w-full h-[60vh] rounded-xl border border-white/30 shadow-md bg-white/60 flex items-center justify-center text-center p-8">
                <div>
                  <p className="text-gray-700 mb-4">
                    This site can't be displayed here due to security restrictions.
                  </p>
                  <p className="text-gray-600 mb-4">
                    The resource has been opened in a new tab for you.
                  </p>
                  <button
                    onClick={() => window.open(url, '_blank')}
                    className="px-6 py-2 bg-white/40 backdrop-blur-md border border-white/30 rounded-xl text-blue-700 hover:bg-white/60 hover:shadow-lg hover:scale-105 transition font-semibold shadow-md"
                    style={{ boxShadow: '0 4px 24px 0 rgba(0,0,0,0.08)' }}
                  >
                    Open in New Tab
                  </button>
                </div>
              </div>
            ) : (
              <>
                {isLoading && (
                  <div className="w-full h-[60vh] rounded-xl border border-white/30 shadow-md bg-white/60 flex items-center justify-center">
                    <div className="text-gray-600">Loading resource...</div>
                  </div>
                )}
                <iframe
                  ref={iframeRef}
                  src={url}
                  title="External Resource"
                  className="w-full h-[60vh] rounded-xl border border-white/30 shadow-md bg-white/60"
                  style={{ minHeight: 400, display: isLoading ? 'none' : 'block' }}
                  allowFullScreen
                  onError={handleIframeError}
                  onLoad={handleIframeLoad}
                />
              </>
            )}
          </div>
          <div className="mt-12 flex flex-col items-center">
            <span className="mb-2 text-gray-700">Please email us your suggestions for improvement or inclusions</span>
            <a
              href="mailto:seiniger@gmail.com"
              className="px-6 py-2 bg-white/40 backdrop-blur-md border border-white/30 rounded-xl text-blue-700 hover:bg-white/60 hover:shadow-lg hover:scale-105 transition font-semibold shadow-md"
              style={{ boxShadow: '0 4px 24px 0 rgba(0,0,0,0.08)' }}
            >
              Email Suggestions
            </a>
          </div>
        </div>
      </div>
    </div>
  );
} 