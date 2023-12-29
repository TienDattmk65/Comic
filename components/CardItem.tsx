import axios from 'axios';
import Image from 'next/image';
import imgError from '/img-error.png';
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface ICard {
  data: Record<string, any>;
}

const CardItem: React.FC<ICard> = ({ data = {} }) => {
  const { id, title, image, createdAt } = data;
  const router = useRouter();

  const handleCardClick = async () => {
    try {
      // Gọi API để lấy chi tiết truyện dựa trên ID
      const response = await axios.get(`/api/comics/${id}`);
      const comicDetail = response.data;

      // Chuyển hướng đến trang chi tiết truyện
      // Sử dụng asPath để truyền thêm dữ liệu nếu cần thiết
      router.push(`/comics/[id]`, `/comics/${id}`, { shallow: true });
    } catch (error) {
      console.error('Error fetching comic details', error);
    }
  };

  return (
    <div className="w-full h-[240px] xl:h-[220px] overflow-hidden group" onClick={handleCardClick}>
      <Link href={`/comics/[id]`} as={`/comics/${id}`}>
        <a>
          <Image
            src={image || imgError}
            alt={title}
            width={300}
            height={450}
            objectFit="cover"
          />
          <h3>{title}</h3>
          <p>Created at: {createdAt}</p>
        </a>
      </Link>
    </div>
  );
};

export default CardItem;

