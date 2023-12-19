import { getProducts } from '@/service/products';
import Link from 'next/link';
import MeowArticle from '@/components/MeowArticle';
import clothesImage from '../../../public/images/clothes.jpg';
import Image from 'next/image';
// ISR렌더링 몇초마다 리랜더링 할건지 설정
// export const revalidate = 3;

export default async function ProductsPage() {
    // 서버 파일(데이터베이스)에 있는 제품의 리스트를 읽어와서, 조회
    //for (let i = 0; i < 1000000; i++) {}
    const products = await getProducts();

    return (
        <div>
            <h1>제품 소개 페이지!</h1>
            <Image src={clothesImage} alt='Clothes' />
            <ul>
                {products.map((product, index) => (
                    <Link href={`/products/${product.id}`} key={index}>
                        <li key={index}>{product.name}</li>
                    </Link>
                ))}
            </ul>
            <MeowArticle />
        </div>
    );
}
