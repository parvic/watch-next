import React, { useContext, useEffect } from 'react';
import * as FI from 'react-icons/fi';
import { MovieContext } from '../../context/MovieContext';

import * as S from './style';

interface SocialProps {
  movieId: number;
}

export default function Social({ movieId }: SocialProps) {
  const { fetchMovieSocial, movieSocial } = useContext(MovieContext);

  useEffect(() => {
    fetchMovieSocial(movieId);
    console.log(movieSocial);
  }, [movieId]);

  return (
    <S.SocialContainer>
      {movieSocial && (
        <div>
          {movieSocial.instagram_id && (
            <a
              href={`https://instagram.com/${movieSocial.instagram_id}`}
              target="_blank"
              rel="noreferrer"
            >
              <FI.FiInstagram size={20} />
            </a>
          )}

          {movieSocial.facebook_id && (
            <a
              href={`https://facebook.com/${movieSocial.facebook_id}`}
              target="_blank"
              rel="noreferrer"
            >
              <FI.FiFacebook size={20} />
            </a>
          )}

          {movieSocial.twitter_id && (
            <a
              href={`https://twitter.com/${movieSocial.twitter_id}`}
              target="_blank"
              rel="noreferrer"
            >
              <FI.FiTwitter size={20} />
            </a>
          )}
        </div>
      )}
    </S.SocialContainer>
  );
}
