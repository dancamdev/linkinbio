import type {NextPage} from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>{'Dancamdev\'s official links'}</title>
                <meta name="description"
                      content="The only place where you can find all officials Dancamdev links, social profiles and projects"/>

                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
                <link rel="manifest" href="/site.webmanifest"/>
                <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
                <meta name="msapplication-TileColor" content="#da532c"/>
                <meta name="theme-color" content="#ffffff"/>
            </Head>

            <div className='flex flex-col items-center bg-gray-900 min-h-screen h-full w-full pt-10'>
                <div
                    className='flex overflow-hidden pt-5 justify-center align-bottom mx-auto h-36 w-36 bg-gray-800 rounded-full shadow-lg'>
                    <Image className={'pt-3'} src={'/assets/dancamdev.webp'} alt='Dancamdev logo' width={'100%'}
                           height={'100%'} objectFit={'cover'}/>
                </div>
                <h1 className={'mt-8 text-xl font-medium text-white'}>Daniele Cambi || @Dancamdev</h1>
                <h2 className='mt-2 text-white'>All my official links are here 👇</h2>
                <LinkItem href={'https://appandup.app/'} title={'App and Up Website'} icon={'/assets/appandup.webp'}/>
                <LinkItem href={'https://mentorship.dancamdev.com/'} title={'Flutter mentorship'}
                          icon={'/assets/mentorship.webp'}/>
                <LinkItem href={'https://twitter.com/dancamdev'} title={'Follow me on Twitter!'}
                          icon={'/assets/twitter.webp'}/>
            </div>
        </>
    );
};

const LinkItem = ({href, title, icon}: LinkItemProps) => {
    return (
        <Link href={href}>
            <div
                className='flex items-center duration-200 rounded-xl transform hover:scale-105 shadow-lg hover:shadow-xl h-20 w-[250px] mt-8 py-3 px-3 space-x-5 justify-between bg-white cursor-pointer'>
                <Image className={''} src={icon} alt={title} width={'50%'} height={'50%'} objectFit={'contain'}/>
                <p className=''>{title}</p>
            </div>
        </Link>
    );
}

type LinkItemProps = {
    href: string,
    title: string,
    icon: string,
}

export default Home;
