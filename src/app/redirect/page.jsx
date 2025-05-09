"use client";
import React, { useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import ContextMenu from '@/components/ContextMenu';

export default function RedirectPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [countdown, setCountdown] = useState(3);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [showContextMenu, setShowContextMenu] = useState(false);
  
  const destination = searchParams.get('to');
  const type = searchParams.get('type') || 'discord';
  
  const urls = {
    discord: "https://discord.gg/w44ttXFrGK",
    bot: "https://discord.com/oauth2/authorize?client_id=1352949579506651156&permissions=8&integration_type=0&scope=bot"
  };
  
  const titles = {
    discord: "Discord Server",
    bot: "Add Bot to Server"
  };
  
  const contextMenuItems = [
    {
      label: "Copy Link",
      icon: "fas fa-copy",
      onClick: () => {
        navigator.clipboard.writeText(urls[destination] || "");
      }
    },
    {
      label: "Open in New Tab",
      icon: "fas fa-external-link-alt",
      onClick: () => {
        window.open(urls[destination], '_blank');
      }
    },
    { divider: true },
    {
      label: "Cancel Redirect",
      icon: "fas fa-times",
      onClick: () => {
        router.push('/');
      }
    },
    {
      label: "Go Now",
      icon: "fas fa-arrow-right",
      onClick: () => {
        window.location.href = urls[destination];
      }
    }
  ];
  
  useEffect(() => {

    if (!destination || !urls[destination]) {
      router.push('/');
      return;
    }
    
    const progressInterval = setInterval(() => {
      setLoadingProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 1;
      });
    }, 30);
    
    const countdownInterval = setInterval(() => {
      setCountdown(prev => {
        if (prev <= 1) {
          clearInterval(countdownInterval);
          window.location.href = urls[destination];
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    
    return () => {
      clearInterval(progressInterval);
      clearInterval(countdownInterval);
    };
  }, [destination, router]);
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#4F46E5]/10 to-[#7C3AED]/10 flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center">
        <div className="mb-6">
          <i className="fab fa-discord text-[#4F46E5] text-5xl"></i>
        </div>
        
        <h1 className="text-2xl font-bold mb-2">Redirecting you to</h1>
        <h2 className="text-xl text-[#4F46E5] font-semibold mb-6">
          {titles[destination] || 'Discord'}
        </h2>
        
        <div className="relative h-2 bg-gray-200 rounded-full overflow-hidden mb-4">
          <div 
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] rounded-full transition-all duration-300 ease-out"
            style={{ width: `${loadingProgress}%` }}
          ></div>
        </div>
        
        <p className="text-gray-600 mb-6">
          You will be redirected in <span className="font-bold text-[#4F46E5]">{countdown}</span> seconds...
        </p>
        

        <div className="mt-8 flex justify-center">
          <div className="animate-spin h-8 w-8 border-4 border-[#4F46E5] border-t-transparent rounded-full"></div>
        </div>
      </div>
      
      <div className="mt-6 text-gray-500 text-sm">
        <p>Minds Matter UK • Mental Health Support</p>
      </div>
      

      <ContextMenu 
        items={contextMenuItems}
        onClose={() => setShowContextMenu(false)}
      />
    </div>
  );
}