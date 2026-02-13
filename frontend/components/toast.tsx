'use client';

import clsx from 'clsx';
import { useEffect, useState } from 'react';

import { ExternalLinkIcon } from '@/components/icons/external-link';
import { XIcon } from '@/components/icons/x';

export const AIToast = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsOpen(true);
    }, 2000);
  }, []);

  return (
    <div
      className={clsx(
        'hidden fixed bottom-4 left-4 z-50 bg-secondary text-black px-6 py-3 rounded-lg shadow-lg flex items-center gap-4 opacity-0 transition-all',
        isOpen && 'opacity-100'
      )}
    >
      <div className="flex items-start">
        <div className="flex-1">
          <p className="text-sm font-medium text-gray-900">LAZARS®</p>
          <p className="mt-1 text-sm text-gray-500">
            Az oldal marketing alapú sütiket használ! Toast Chapter 25
          </p>
          <div className="mt-3">
            <a
              href={'https://lazarsalon.com/privacy'}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-900 hover:text-gray-700 transition-colors"
            >
              Megtekintés:
              <ExternalLinkIcon className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
        <div className="ml-4 flex flex-shrink-0">
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="inline-flex rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
          >
            <span className="sr-only">Bezár</span>
            <XIcon className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};
