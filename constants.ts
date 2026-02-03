import React from 'react';
import { AppMode, NavItem } from './types';
import { IconChat, IconImage, IconEye, IconMic, IconVideo } from './components/Icons';

export const APP_NAME = 'Gemini Creative Studio';

export const NAV_ITEMS: NavItem[] = [
  {
    id: AppMode.Chat,
    label: 'Chat Assistant',
    icon: React.createElement(IconChat, { className: "w-5 h-5" }),
  },
  {
    id: AppMode.VisionAnalysis,
    label: 'Vision Analysis',
    icon: React.createElement(IconEye, { className: "w-5 h-5" }),
  },
  {
    id: AppMode.ImageGeneration,
    label: 'Image Studio',
    icon: React.createElement(IconImage, { className: "w-5 h-5" }),
  },
  {
    id: AppMode.VideoGeneration,
    label: 'Video Creator',
    icon: React.createElement(IconVideo, { className: "w-5 h-5" }),
  },
  {
    id: AppMode.Live,
    label: 'Live Conversation',
    icon: React.createElement(IconMic, { className: "w-5 h-5" }),
  },
];