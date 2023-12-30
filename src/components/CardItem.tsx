import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import axios from 'axios';
import imgError from '/img-error.png';
import { Router, useRouter } from 'next/router';



interface CardItemProps {
  data: {
    title: string;
    image: string;
    numberChapter: number;
    description: string;
    id: string; // Assuming you have an id in the data
  };
}

const cardStyles: React.CSSProperties = {
  border: '1px solid #ddd',
  borderRadius: '8px',
  overflow: 'hidden',
  transition: 'box-shadow 0.3s ease-in-out',
  cursor: 'pointer',
  margin: '10px',
  width: '300px',
};

const imageContainerStyles: React.CSSProperties = {
  position: 'relative',
  overflow: 'hidden',
  height: '450px',
};

const titleStyles: React.CSSProperties = {
  margin: '10px',
  fontSize: '18px',
  fontWeight: 'bold',
};

const numberChapterStyles: React.CSSProperties = {
  margin: '0 10px 10px',
  fontSize: '14px',
  color: '#666',
};

const descriptionStyles: React.CSSProperties = {
  margin: '0 10px 10px',
  fontSize: '14px',
  color: '#333',
};

const CardItem: React.FC<CardItemProps> = ({ data }) => {
  const { title, image, numberChapter, description, id } = data;

  return (
    <div style={cardStyles}>
      <Link href="/comics/[id]" as={`/comics/${id}`}>
        <a>
          <div style={imageContainerStyles}>
            <Image src={image} alt={title} width={300} height={450} objectFit="cover" />
          </div>
          <h3 style={titleStyles}>{title}</h3>
          <p style={numberChapterStyles}>Chapter {numberChapter}</p>
          <p style={descriptionStyles}>{description}</p>
        </a>
      </Link>
    </div>
  );
};

export default CardItem;
