export const FLAT_LIGHT = `
  <svg width="{WIDTH}" height="67" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <style type="text/css">
        @font-face {
          font-family: 'IBM Plex Sans';
          font-style: normal;
          font-weight: 700;
          src: url('../fonts/ibm_plex_sans.woff2');
        }
      </style>
    </defs>
    <g fill="none" fill-rule="evenodd">
      <rect stroke="#3485E4" stroke-width="2" fill="#FFFFFF" x="1" y="1" width="{SHORT_WIDTH}" height="65" rx="8"/>
      <path d="M24.4168 31.9728C24.4168 31.9728 18.9576 52.0872 40.8388 52.2624C47.704 49.7064 52.7628 43.4408 53.5296 35.8868C53.5824 35.3644 53.598 34.8312 53.6096 34.2976C53.612 34.1568 53.6308 34.0204 53.6308 33.8792C53.6308 33.2708 53.5936 32.6712 53.54 32.0764C47.7592 54.834 22.1848 45.9204 24.4168 31.9728Z" fill="#373737"/>
      <path d="M35.7304 24.5068C35.7304 24.5068 15.358 18.8176 15.6712 41.032C16.7156 43.7165 18.3364 46.139 20.4192 48.1288C20.5064 48.2116 20.5968 48.29 20.6852 48.3712C21.2743 48.9143 21.896 49.421 22.5468 49.8884C22.648 49.9604 22.7428 50.0404 22.8444 50.1108C23.5329 50.5815 24.2507 51.0077 24.9936 51.3868C25.2096 51.498 25.4312 51.5996 25.65 51.7032C26.2893 52.0042 26.9446 52.27 27.6128 52.4996C27.7768 52.5556 27.9336 52.6256 28.1 52.678C28.9011 52.9229 29.7172 53.1159 30.5432 53.2556C30.7928 53.2996 31.0456 53.336 31.2984 53.3708C32.1552 53.4948 33.0192 53.562 33.8852 53.572C33.9184 53.572 33.9504 53.5772 33.9836 53.5772C34.6364 53.5772 35.2812 53.542 35.9168 53.4796C13.0584 48.0284 21.7468 22.468 35.7304 24.5076V24.5068Z" fill="#373737"/>
      <path d="M43.6712 35.0416C43.6712 35.0416 48.4912 14.7216 26.7952 15.6288C19.52 18.5028 14.3696 25.5816 14.3696 33.8776C14.3764 34.7708 14.4436 35.6628 14.5712 36.5468C19.1372 13.5572 45.1504 21.0028 43.6712 35.0416Z" fill="#373737"/>
      <path d="M33.254 43.786C33.254 43.786 53.662 46.45 52.3848 27.0468C49.6072 19.578 42.4356 14.2468 34.0004 14.2468C32.8059 14.2515 31.6144 14.3647 30.4404 14.5852C53.1804 17.3768 47.27 43.9844 33.254 43.786Z" fill="#373737"/>
      <path d="M39.6652 33.88C39.6651 35.3383 39.0858 36.7369 38.0546 37.768C37.0233 38.7992 35.6247 39.3784 34.1664 39.3784C32.7081 39.3783 31.3095 38.799 30.2784 37.7678C29.2472 36.7365 28.6679 35.3379 28.668 33.8796C28.668 32.4213 29.2473 31.0227 30.2785 29.9915C31.3097 28.9603 32.7083 28.381 34.1666 28.381C35.6249 28.381 37.0235 28.9603 38.0547 29.9915C39.0859 31.0227 39.6652 32.4213 39.6652 33.8796V33.88Z" fill="#373737"/>
      <text font-family="{FONT}" font-size="25" font-weight="bold" fill="#3485E4">
        <tspan x="66" y="51">{REPL_TALK}</tspan>
      </text>
      <text font-family="{FONT}" font-size="18" font-weight="bold" fill="#3485E4">
        <tspan x="{NUM_POS}" y="51">{UPVOTES}</tspan>
      </text><text font-family="{FONT}" font-size="20" font-weight="bold" fill="#3485E4">
        <tspan x="{TRIANGLE_POS}" y="30">▲</tspan>
      </text>
      <text font-family="{FONT}" font-size="12" font-weight="bold" fill="#3485E4">
        <tspan x="66" y="26">{FEATURED_ON}</tspan>
      </text>
    </g>
  </svg>
`;

export const FLAT_DARK = `
  <svg width="{WIDTH}" height="67" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <style type="text/css">
        @font-face {
          font-family: 'IBM Plex Sans';
          font-style: normal;
          font-weight: 700;
          src: url('../fonts/ibm_plex_sans.woff2');
        }
      </style>
    </defs>
    <g fill="none" fill-rule="evenodd">
      <rect fill="#24273F" x="1" y="1" width="{SHORT_WIDTH}" height="65" rx="8"/>
      <path d="M24.4168 31.9728C24.4168 31.9728 18.9576 52.0872 40.8388 52.2624C47.704 49.7064 52.7628 43.4408 53.5296 35.8868C53.5824 35.3644 53.598 34.8312 53.6096 34.2976C53.612 34.1568 53.6308 34.0204 53.6308 33.8792C53.6308 33.2708 53.5936 32.6712 53.54 32.0764C47.7592 54.834 22.1848 45.9204 24.4168 31.9728Z" fill="#E1E2E4"/>
      <path d="M35.7304 24.5068C35.7304 24.5068 15.358 18.8176 15.6712 41.032C16.7156 43.7165 18.3364 46.139 20.4192 48.1288C20.5064 48.2116 20.5968 48.29 20.6852 48.3712C21.2743 48.9143 21.896 49.421 22.5468 49.8884C22.648 49.9604 22.7428 50.0404 22.8444 50.1108C23.5329 50.5815 24.2507 51.0077 24.9936 51.3868C25.2096 51.498 25.4312 51.5996 25.65 51.7032C26.2893 52.0042 26.9446 52.27 27.6128 52.4996C27.7768 52.5556 27.9336 52.6256 28.1 52.678C28.9011 52.9229 29.7172 53.1159 30.5432 53.2556C30.7928 53.2996 31.0456 53.336 31.2984 53.3708C32.1552 53.4948 33.0192 53.562 33.8852 53.572C33.9184 53.572 33.9504 53.5772 33.9836 53.5772C34.6364 53.5772 35.2812 53.542 35.9168 53.4796C13.0584 48.0284 21.7468 22.468 35.7304 24.5076V24.5068Z" fill="#E1E2E4"/>
      <path d="M43.6712 35.0416C43.6712 35.0416 48.4912 14.7216 26.7952 15.6288C19.52 18.5028 14.3696 25.5816 14.3696 33.8776C14.3764 34.7708 14.4436 35.6628 14.5712 36.5468C19.1372 13.5572 45.1504 21.0028 43.6712 35.0416Z" fill="#E1E2E4"/>
      <path d="M33.254 43.786C33.254 43.786 53.662 46.45 52.3848 27.0468C49.6072 19.578 42.4356 14.2468 34.0004 14.2468C32.8059 14.2515 31.6144 14.3647 30.4404 14.5852C53.1804 17.3768 47.27 43.9844 33.254 43.786Z" fill="#E1E2E4"/>
      <path d="M39.6652 33.88C39.6651 35.3383 39.0858 36.7369 38.0546 37.768C37.0233 38.7992 35.6247 39.3784 34.1664 39.3784C32.7081 39.3783 31.3095 38.799 30.2784 37.7678C29.2472 36.7365 28.6679 35.3379 28.668 33.8796C28.668 32.4213 29.2473 31.0227 30.2785 29.9915C31.3097 28.9603 32.7083 28.381 34.1666 28.381C35.6249 28.381 37.0235 28.9603 38.0547 29.9915C39.0859 31.0227 39.6652 32.4213 39.6652 33.8796V33.88Z" fill="#E1E2E4"/>
      <text font-family="{FONT}" font-size="25" font-weight="bold" fill="#FFFFFF">
      <tspan x="66" y="51">{REPL_TALK}</tspan>
      </text>
      <text font-family="{FONT}" font-size="18" font-weight="bold" fill="#FFFFFF">
        <tspan x="{NUM_POS}" y="51">{UPVOTES}</tspan>
      </text><text font-family="{FONT}" font-size="20" font-weight="bold" fill="#FFFFFF">
        <tspan x="{TRIANGLE_POS}" y="30">▲</tspan>
      </text>
      <text font-family="{FONT}" font-size="12" font-weight="bold" fill="#E1E2E4">
        <tspan x="66" y="26">{FEATURED_ON}</tspan>
      </text>
    </g>
  </svg>
`;

export const GRAD_LIGHT = `
  <svg width="{WIDTH}" height="67" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <style type="text/css">
        @font-face {
          font-family: 'IBM Plex Sans';
          font-style: normal;
          font-weight: 700;
          src: url('../fonts/ibm_plex_sans.woff2');
        }
      </style>
    </defs>
    <g fill="none" fill-rule="evenodd">
      <rect stroke="#3485E4" stroke-width="2" fill="#FFFFFF" x="1" y="1" width="{SHORT_WIDTH}" height="65" rx="8"/>
      <path d="M24.4168 31.9728C24.4168 31.9728 18.9576 52.0872 40.8388 52.2624C47.704 49.7064 52.7628 43.4408 53.5296 35.8868C53.5824 35.3644 53.598 34.8312 53.6096 34.2976C53.612 34.1568 53.6308 34.0204 53.6308 33.8792C53.6308 33.2708 53.5936 32.6712 53.54 32.0764C47.7592 54.834 22.1848 45.9204 24.4168 31.9728Z" fill="#373737"/>
      <path d="M35.7304 24.5068C35.7304 24.5068 15.358 18.8176 15.6712 41.032C16.7156 43.7165 18.3364 46.139 20.4192 48.1288C20.5064 48.2116 20.5968 48.29 20.6852 48.3712C21.2743 48.9143 21.896 49.421 22.5468 49.8884C22.648 49.9604 22.7428 50.0404 22.8444 50.1108C23.5329 50.5815 24.2507 51.0077 24.9936 51.3868C25.2096 51.498 25.4312 51.5996 25.65 51.7032C26.2893 52.0042 26.9446 52.27 27.6128 52.4996C27.7768 52.5556 27.9336 52.6256 28.1 52.678C28.9011 52.9229 29.7172 53.1159 30.5432 53.2556C30.7928 53.2996 31.0456 53.336 31.2984 53.3708C32.1552 53.4948 33.0192 53.562 33.8852 53.572C33.9184 53.572 33.9504 53.5772 33.9836 53.5772C34.6364 53.5772 35.2812 53.542 35.9168 53.4796C13.0584 48.0284 21.7468 22.468 35.7304 24.5076V24.5068Z" fill="#373737"/>
      <path d="M43.6712 35.0416C43.6712 35.0416 48.4912 14.7216 26.7952 15.6288C19.52 18.5028 14.3696 25.5816 14.3696 33.8776C14.3764 34.7708 14.4436 35.6628 14.5712 36.5468C19.1372 13.5572 45.1504 21.0028 43.6712 35.0416Z" fill="#373737"/>
      <path d="M33.254 43.786C33.254 43.786 53.662 46.45 52.3848 27.0468C49.6072 19.578 42.4356 14.2468 34.0004 14.2468C32.8059 14.2515 31.6144 14.3647 30.4404 14.5852C53.1804 17.3768 47.27 43.9844 33.254 43.786Z" fill="#373737"/>
      <path d="M39.6652 33.88C39.6651 35.3383 39.0858 36.7369 38.0546 37.768C37.0233 38.7992 35.6247 39.3784 34.1664 39.3784C32.7081 39.3783 31.3095 38.799 30.2784 37.7678C29.2472 36.7365 28.6679 35.3379 28.668 33.8796C28.668 32.4213 29.2473 31.0227 30.2785 29.9915C31.3097 28.9603 32.7083 28.381 34.1666 28.381C35.6249 28.381 37.0235 28.9603 38.0547 29.9915C39.0859 31.0227 39.6652 32.4213 39.6652 33.8796V33.88Z" fill="#373737"/>
      <text font-family="{FONT}" font-size="25" font-weight="bold" fill="#3485E4">
        <tspan x="66" y="51">{REPL_TALK}</tspan>
      </text>
      <text font-family="{FONT}" font-size="18" font-weight="bold" fill="#3485E4">
        <tspan x="{NUM_POS}" y="51">{UPVOTES}</tspan>
      </text><text font-family="{FONT}" font-size="20" font-weight="bold" fill="#3485E4">
        <tspan x="{TRIANGLE_POS}" y="30">▲</tspan>
      </text>
      <text font-family="{FONT}" font-size="12" font-weight="bold" fill="#3485E4">
        <tspan x="66" y="26">{FEATURED_ON}</tspan>
      </text>
    </g>
  </svg>
`;

export const GRAD_DARK = `
  <svg width="{WIDTH}" height="67" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <style type="text/css">
        @font-face {
          font-family: 'IBM Plex Sans';
          font-style: normal;
          font-weight: 700;
          src: url('../fonts/ibm_plex_sans.woff2');
        }
      </style>
    </defs>
    <g fill="none" fill-rule="evenodd">
      <rect fill="#24273F" x="1" y="1" width="{SHORT_WIDTH}" height="65" rx="8"/>
      <path d="M24.4168 31.9728C24.4168 31.9728 18.9576 52.0872 40.8388 52.2624C47.704 49.7064 52.7628 43.4408 53.5296 35.8868C53.5824 35.3644 53.598 34.8312 53.6096 34.2976C53.612 34.1568 53.6308 34.0204 53.6308 33.8792C53.6308 33.2708 53.5936 32.6712 53.54 32.0764C47.7592 54.834 22.1848 45.9204 24.4168 31.9728Z" fill="#E1E2E4"/>
      <path d="M35.7304 24.5068C35.7304 24.5068 15.358 18.8176 15.6712 41.032C16.7156 43.7165 18.3364 46.139 20.4192 48.1288C20.5064 48.2116 20.5968 48.29 20.6852 48.3712C21.2743 48.9143 21.896 49.421 22.5468 49.8884C22.648 49.9604 22.7428 50.0404 22.8444 50.1108C23.5329 50.5815 24.2507 51.0077 24.9936 51.3868C25.2096 51.498 25.4312 51.5996 25.65 51.7032C26.2893 52.0042 26.9446 52.27 27.6128 52.4996C27.7768 52.5556 27.9336 52.6256 28.1 52.678C28.9011 52.9229 29.7172 53.1159 30.5432 53.2556C30.7928 53.2996 31.0456 53.336 31.2984 53.3708C32.1552 53.4948 33.0192 53.562 33.8852 53.572C33.9184 53.572 33.9504 53.5772 33.9836 53.5772C34.6364 53.5772 35.2812 53.542 35.9168 53.4796C13.0584 48.0284 21.7468 22.468 35.7304 24.5076V24.5068Z" fill="#E1E2E4"/>
      <path d="M43.6712 35.0416C43.6712 35.0416 48.4912 14.7216 26.7952 15.6288C19.52 18.5028 14.3696 25.5816 14.3696 33.8776C14.3764 34.7708 14.4436 35.6628 14.5712 36.5468C19.1372 13.5572 45.1504 21.0028 43.6712 35.0416Z" fill="#E1E2E4"/>
      <path d="M33.254 43.786C33.254 43.786 53.662 46.45 52.3848 27.0468C49.6072 19.578 42.4356 14.2468 34.0004 14.2468C32.8059 14.2515 31.6144 14.3647 30.4404 14.5852C53.1804 17.3768 47.27 43.9844 33.254 43.786Z" fill="#E1E2E4"/>
      <path d="M39.6652 33.88C39.6651 35.3383 39.0858 36.7369 38.0546 37.768C37.0233 38.7992 35.6247 39.3784 34.1664 39.3784C32.7081 39.3783 31.3095 38.799 30.2784 37.7678C29.2472 36.7365 28.6679 35.3379 28.668 33.8796C28.668 32.4213 29.2473 31.0227 30.2785 29.9915C31.3097 28.9603 32.7083 28.381 34.1666 28.381C35.6249 28.381 37.0235 28.9603 38.0547 29.9915C39.0859 31.0227 39.6652 32.4213 39.6652 33.8796V33.88Z" fill="#E1E2E4"/>
      <text font-family="{FONT}" font-size="25" font-weight="bold" fill="#FFFFFF">
      <tspan x="66" y="51">{REPL_TALK}</tspan>
      </text>
      <text font-family="{FONT}" font-size="18" font-weight="bold" fill="#FFFFFF">
        <tspan x="{NUM_POS}" y="51">{UPVOTES}</tspan>
      </text><text font-family="{FONT}" font-size="20" font-weight="bold" fill="#FFFFFF">
        <tspan x="{TRIANGLE_POS}" y="30">▲</tspan>
      </text>
      <text font-family="{FONT}" font-size="12" font-weight="bold" fill="#E1E2E4">
        <tspan x="66" y="26">{FEATURED_ON}</tspan>
      </text>
    </g>
  </svg>
`;