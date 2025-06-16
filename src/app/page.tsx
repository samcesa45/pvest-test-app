import Footer from '@/components/footer';
import Hero from '@/components/hero/hero';
import PayBills from '@/components/pay-bills';
import ShopOnline from '@/components/shop-online';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <main className="flex flex-col  row-start-2 items-center sm:items-start font-[family-name:var(--font-dm-sans)]">
        <ShopOnline />
        <PayBills />
      </main>
      <Footer />
    </>
  );
}
