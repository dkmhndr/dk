import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React from 'react';

export default function SocialsButton() {
  return (
    <div className='mt-2 flex space-x-3 text-3xl'>
      <Link
        className='hover:text-primary-500 transition-colors duration-300'
        href='https://twitter.com/dkmhndr_'
      >
        <FontAwesomeIcon icon={fab.faTwitter}></FontAwesomeIcon>
      </Link>
      <Link
        className='hover:text-primary-500 transition-colors duration-300'
        href='https://instagram.com/u/dkmhndr_'
      >
        <FontAwesomeIcon icon={fab.faInstagram}></FontAwesomeIcon>
      </Link>
      <Link
        className='hover:text-primary-500 transition-colors duration-300'
        href='https://www.linkedin.com/in/dkmhndr/'
      >
        <FontAwesomeIcon icon={fab.faLinkedin}></FontAwesomeIcon>
      </Link>
      <Link
        className='hover:text-primary-500 transition-colors duration-300'
        href='https://www.youtube.com/c/DikaMahendra'
      >
        <FontAwesomeIcon icon={fab.faYoutube}></FontAwesomeIcon>
      </Link>
      <Link
        className='hover:text-primary-500 transition-colors duration-300'
        href='https://open.spotify.com/artist/5CD0g0Ru8RgSsvs9X5zJ3K'
      >
        <FontAwesomeIcon icon={fab.faSpotify}></FontAwesomeIcon>
      </Link>
      <Link
        className='hover:text-primary-500 transition-colors duration-300'
        href='https://github.com/dkmhndr'
      >
        <FontAwesomeIcon icon={fab.faGithub}></FontAwesomeIcon>
      </Link>
    </div>
  );
}

import { fab } from '@fortawesome/free-brands-svg-icons';
