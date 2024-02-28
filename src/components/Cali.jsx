import {React, useEffect, useRef} from 'react';
import { getCalApi } from '@calcom/embed-react';
const Cali = () => {
  useEffect(() => {
    (async function() {
      const cal = await getCalApi();
      cal('ui', {
        theme: 'light',
        hideEventTypeDetails: false,
        layout: 'month_view',
        cssVarsPerTheme: {
          light: {
            'cal-brand': '#112240',
            'cal-text': '#020c1b', // White text
            'cal-text-emphasis': '#495670', // Orange text
            'cal-border-emphasis': '#112240', // Orange border
            'cal-text-error': '#f44336', // Red for errors
            'cal-border': '#38bdf8', // Dark blue border
            'cal-border-default': '#38bdf8', // Dark blue border
            'cal-border-subtle': '#0a192f', // Lighter blue border
            'cal-border-booker': '#0a192f', // Lighter blue border
            'cal-text-muted': '#6e7d92', // Gray text for muted elements
            'cal-bg-emphasis': '#38bdf8', // Orange background for emphasis
          },
        },
      });
    })();
  }, []);
  return (
     <button
        className="fixed bottom-4 right-4 bg-blue-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
        data-cal-link="kanhaiya-verma/book-a-call"
        data-cal-config='{"layout":"month_view"}'>
       <p>📅  Book a Call </p>   
      </button>
  );
};

export default Cali;
