import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/Tabs';
import Image from 'next/image';

const DiscoverTabs = () => {
  const tabData = [
    {
      city: 'Zakopane',
      image: {
        src: 'https://imgcy.trivago.com/c_fill,d_dummy.jpeg,e_sharpen:60,f_auto,h_340,q_45,w_356/https://imgcy.trivago.com/c_fill,d_dummy.jpeg,e_sharpen:60,f_auto,h_258,q_auto,w_258/categoryimages/92/21/92212_v71.jpeg.jpeg',
        alt: 'Zakopane Scene',
      },
      priceRange: [
        { fromPrice: 385, toPrice: 960, currency: 'PLN', month: 'January' },
        { fromPrice: 405, toPrice: 1035, currency: 'PLN', month: 'February' },
        { fromPrice: 315, toPrice: 760, currency: 'PLN', month: 'March' },
        { fromPrice: 345, toPrice: 805, currency: 'PLN', month: 'April' },
        { fromPrice: 385, toPrice: 960, currency: 'PLN', month: 'May' },
        { fromPrice: 385, toPrice: 960, currency: 'PLN', month: 'June' },
        { fromPrice: 385, toPrice: 960, currency: 'PLN', month: 'July' },
        { fromPrice: 385, toPrice: 960, currency: 'PLN', month: 'August' },
        { fromPrice: 385, toPrice: 960, currency: 'PLN', month: 'September' },
        { fromPrice: 385, toPrice: 960, currency: 'PLN', month: 'October' },
        { fromPrice: 385, toPrice: 960, currency: 'PLN', month: 'November' },
        { fromPrice: 385, toPrice: 960, currency: 'PLN', month: 'December' },
      ],
    },
    {
      city: 'Kolobrzeg',
      image: {
        src: 'https://imgcy.trivago.com/c_fill,d_dummy.jpeg,e_sharpen:60,f_auto,h_340,q_45,w_356/https://imgcy.trivago.com/c_fill,d_dummy.jpeg,e_sharpen:60,f_auto,h_258,q_auto,w_258/categoryimages/92/21/92212_v71.jpeg.jpeg',
        alt: 'Kolobrzeg Scene',
      },
      priceRange: [
        { fromPrice: 385, toPrice: 960, currency: 'PLN', month: 'January' },
        { fromPrice: 405, toPrice: 1035, currency: 'PLN', month: 'February' },
        { fromPrice: 315, toPrice: 760, currency: 'PLN', month: 'March' },
        { fromPrice: 345, toPrice: 805, currency: 'PLN', month: 'April' },
        { fromPrice: 385, toPrice: 960, currency: 'PLN', month: 'May' },
        { fromPrice: 385, toPrice: 960, currency: 'PLN', month: 'June' },
        { fromPrice: 385, toPrice: 960, currency: 'PLN', month: 'July' },
        { fromPrice: 385, toPrice: 960, currency: 'PLN', month: 'August' },
        { fromPrice: 385, toPrice: 960, currency: 'PLN', month: 'September' },
        { fromPrice: 385, toPrice: 960, currency: 'PLN', month: 'October' },
        { fromPrice: 385, toPrice: 960, currency: 'PLN', month: 'November' },
        { fromPrice: 385, toPrice: 960, currency: 'PLN', month: 'December' },
      ],
    },
    {
      city: 'Gdansk',
      image: {
        src: 'https://imgcy.trivago.com/c_fill,d_dummy.jpeg,e_sharpen:60,f_auto,h_340,q_45,w_356/https://imgcy.trivago.com/c_fill,d_dummy.jpeg,e_sharpen:60,f_auto,h_258,q_auto,w_258/categoryimages/92/21/92212_v71.jpeg.jpeg',
        alt: 'Gdansk Scene',
      },
      priceRange: [
        { fromPrice: 385, toPrice: 960, currency: 'PLN', month: 'January' },
        { fromPrice: 405, toPrice: 1035, currency: 'PLN', month: 'February' },
        { fromPrice: 315, toPrice: 760, currency: 'PLN', month: 'March' },
        { fromPrice: 345, toPrice: 805, currency: 'PLN', month: 'April' },
        { fromPrice: 385, toPrice: 960, currency: 'PLN', month: 'May' },
        { fromPrice: 385, toPrice: 960, currency: 'PLN', month: 'June' },
        { fromPrice: 385, toPrice: 960, currency: 'PLN', month: 'July' },
        { fromPrice: 385, toPrice: 960, currency: 'PLN', month: 'August' },
        { fromPrice: 385, toPrice: 960, currency: 'PLN', month: 'September' },
        { fromPrice: 385, toPrice: 960, currency: 'PLN', month: 'October' },
        { fromPrice: 385, toPrice: 960, currency: 'PLN', month: 'November' },
        { fromPrice: 385, toPrice: 960, currency: 'PLN', month: 'December' },
      ],
    },
    {
      city: 'Krakow',
      image: {
        src: 'https://imgcy.trivago.com/c_fill,d_dummy.jpeg,e_sharpen:60,f_auto,h_340,q_45,w_356/https://imgcy.trivago.com/c_fill,d_dummy.jpeg,e_sharpen:60,f_auto,h_258,q_auto,w_258/categoryimages/92/21/92212_v71.jpeg.jpeg',
        alt: 'Krakow Scene',
      },
      priceRange: [
        { fromPrice: 385, toPrice: 960, currency: 'PLN', month: 'January' },
        { fromPrice: 405, toPrice: 1035, currency: 'PLN', month: 'February' },
        { fromPrice: 315, toPrice: 760, currency: 'PLN', month: 'March' },
        { fromPrice: 345, toPrice: 805, currency: 'PLN', month: 'April' },
        { fromPrice: 385, toPrice: 960, currency: 'PLN', month: 'May' },
        { fromPrice: 385, toPrice: 960, currency: 'PLN', month: 'June' },
        { fromPrice: 385, toPrice: 960, currency: 'PLN', month: 'July' },
        { fromPrice: 385, toPrice: 960, currency: 'PLN', month: 'August' },
        { fromPrice: 385, toPrice: 960, currency: 'PLN', month: 'September' },
        { fromPrice: 385, toPrice: 960, currency: 'PLN', month: 'October' },
        { fromPrice: 385, toPrice: 960, currency: 'PLN', month: 'November' },
        { fromPrice: 385, toPrice: 960, currency: 'PLN', month: 'December' },
      ],
    },
  ];
  return (
    <section className='w-full rounded border border-gray-400 py-2'>
      <Tabs>
        <TabsList>
          {tabData?.map((tabKey) => (
            <TabsTrigger key={tabKey.city} value={tabKey.city}>
              {tabKey.city}
            </TabsTrigger>
          ))}
        </TabsList>
        {tabData?.map((tab) => (
          <TabsContent key={tab.city} value={tab.city}>
            <div className='flex flex-row gap-2'>
              <Image
                src={tab.image.src}
                alt={tab.image.alt}
                width='200'
                height='100'
              />
              <div className='h-full max-h-80 w-full overflow-scroll'>
                {tab.city}
                {tab.priceRange.map((ele) => (
                  <button
                    className='my-2 flex w-full flex-row items-center justify-between rounded border border-gray-200 p-2'
                    key={ele.month}
                  >
                    <span>{ele.month}</span>
                    <div>
                      <span>
                        {ele.currency}&nbsp;
                        {ele.fromPrice}
                      </span>
                      <span>-</span>
                      <span>
                        {ele.currency}&nbsp;
                        {ele.toPrice}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
};

export { DiscoverTabs };
