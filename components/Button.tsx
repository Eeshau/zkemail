// 'use client'

// interface ButtonProps {
//     buttonLabel: string,
//     filledIn?: boolean
// }


// export default function Button({filledIn, buttonLabel}) {
//     return (
//         <button className={`flex justify-between items-center gap-4 py-[5px] px-[20px] rounded-full ${filledIn ? 'bg-blue-500 text-white': 'text-blue-500 bg-white border-2 border-blue-500'}`}>
//             {buttonLabel}
//         </button>
//     )
// }



import * as React from 'react';
import { Button as BaseButton, buttonClasses } from '@mui/base/Button';
import { prepareForSlot } from '@mui/base/utils';
import { styled } from '@mui/system';
import Stack from '@mui/material/Stack';
import Link from 'next/link';

const LinkSlot = prepareForSlot(Link);



/* 
    Component props information:
    - buttonLabel is the name of the button
    - filledIn indicates wether the button is filled in or not, useful for styling
*/

interface ButtonProps {
    buttonLabel: string,
    filledIn?: boolean
}

export default function UnstyledLinkButton({filledIn, buttonLabel}) {
  return (
    <Stack spacing={2} direction="row">
      {/* <Button href="https://mui.com/">Standard link</Button> */}
      <Button href="https://mui.com/" slots={{ root: LinkSlot }}>
        {buttonLabel}
      </Button>
        <Button className={`flex justify-between items-center gap-4 py-[5px] px-[20px] rounded-full ${filledIn ? 'bg-blue-500 text-white': 'text-blue-500 bg-white border-2 border-blue-500'}`}>
            Tailwind {buttonLabel}
        </Button>
    </Stack>
  );
}

const white = {
    0: '#FFFFFF'
}

const blue = {
  200: '#99CCFF',
  300: '#66B2FF',
  400: '#3399FF',
  500: '#007FFF',
  600: '#0072E5',
  700: '#0066CC',
};

const grey = {
  50: '#F3F6F9',
  100: '#E5EAF2',
  200: '#DAE2ED',
  300: '#C7D0DD',
  400: '#B0B8C4',
  500: '#9DA8B7',
  600: '#6B7A90',
  700: '#434D5B',
  800: '#303740',
  900: '#1C2025',
};

const Button = styled(BaseButton)(
  ({ theme }) => `
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1.5;
  text-decoration: none;
  background-color: ${white[0]};
  padding: 8px 16px;
  border-radius: 20px;
  color: ${blue[500]};
  transition: all 150ms ease;
  cursor: pointer;
  border: 2px solid ${blue[500]};

  &:hover {
    background-color: ${blue[600]};
    color: ${white[0]};
  }

  &.${buttonClasses.active} {
    background-color: ${blue[700]};
    box-shadow: none;
    transform: scale(0.99);
  }

  &.${buttonClasses.focusVisible} {
    box-shadow: 0 0 0 4px ${theme.palette.mode === 'dark' ? blue[300] : blue[200]};
    outline: none;
  }

  &.${buttonClasses.disabled} {
    background-color: ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
    color: ${theme.palette.mode === 'dark' ? grey[200] : grey[700]};
    border: 0;
    cursor: default;
    box-shadow: none;
    transform: scale(1);
  }
  `,
);
