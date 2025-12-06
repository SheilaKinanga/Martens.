import React, { useEffect, useRef } from 'react'
import './Product Catalogue.css'
import martens16 from '../../assets/martens-16.jpeg'
import martens10 from '../../assets/martens-10.png'
import luxus from '../../assets/luxus.jpeg'
import altus from '../../assets/altus.jpeg'
import altus2 from '../../assets/altus-2.jpeg'
import damburger from '../../assets/damburger.jpeg'
import damburger2 from '../../assets/damburger-2.jpeg'
import sezoens from '../../assets/sezoens.jpeg'
import sezoens2 from '../../assets/sezoens-2.jpeg'
import kristoffel from '../../assets/kristoffel.jpeg'

const ProductsCatalogue = () => {
  const catalogueRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          catalogueRef.current.classList.add('visible');
          observer.unobserve(catalogueRef.current); 
        }
      },
      { threshold: 0.1 } 
    );

    if (catalogueRef.current) {
      observer.observe(catalogueRef.current);
    }

    return () => {
      if (catalogueRef.current) {
        observer.unobserve(catalogueRef.current);
      }
    };
  }, []);

  return (
    <div className='productcatalogue' ref={catalogueRef}>
      <div className="Super strong beer 16.2%">
        <img src={martens16} alt="" />
        <p className='title'>MARTENS 16.2%</p>
        <p>
        This ultra-strong beer boasts an impressive 16.2% ABV, delivering a bold flavor that combines a rich maltiness with a hint of hop bitterness. Martens Brewery, established in 1758, is renowned for its commitment to quality and innovation in brewing, making this beer a standout in their lineup.
        </p>
      </div>
      <div className="Extra strong beer 10%">
        <img src={martens10} alt="" />
        <p className='title'>MARTENS 10%</p>
        <p>
        With an ABV of 10%, this Pilsener offers a hearty, full-bodied experience. It is crafted with a focus on maintaining freshness and flavor, aligning with Martens Brewery's reputation for producing diverse, high-quality beer.
        </p>
      </div>
      <div className="luxus">
        <img src={luxus} alt="" />
        <p className='title'>LUXUS PREMIUM SERIES</p>
        <p>
        Luxus presents a refined Belgian beer experience, known for its balanced flavor profile and subtle complexity. The smooth and slightly fruity notes make it a favorite among both casual drinkers and beer connoisseurs, showcasing the craftsmanship behind its creation.
        </p>
      </div>
      <div className="altus">
        <img src={altus} alt="" />
        <p className='title'>ALTUS DARK</p>
        <p>
        Designed for casual enjoyment, offering a mild yet flavorful experience. Its lower ABV allows for easy sipping, while the smooth malt notes ensure a satisfying drink that adheres to the high standards of Belgian brewing.
        </p>
      </div>
      <div className="altus2">
        <img src={altus2} alt="" />
        <p className='title'>ALTUS BLOND</p>
        <p>
        This variant enhances the original Altus profile with a more pronounced hop presence, resulting in a crisp finish. It’s an excellent choice for pairing with lighter meals or for those who enjoy a refreshing beer on its own.
        </p>
      </div>
      <div className="damburger">
        <img src={damburger} alt="" />
        <p className='title'>DAMBURGER</p>
        <p>
        A variety of beers with ABVs ranging from 4.2% ,5%, 8.8%, 12.3% to 16%. This private-label brand focuses on providing accessible quality, appealing to a wide range of tastes, and features several styles designed for different drinking occasions.
        </p>
      </div>
      <div className="damburger2">
        <img src={damburger2} alt="" />
        <p className='title'>DAMBURGER SUPER STRONG(16.2%)</p>
        <p>
        This variant of Damburger maintains a balance of flavors while offering a stronger option for those seeking an affordable yet enjoyable beer experience. It exemplifies the brand's commitment to quality.
        </p>
      </div>
      <div className="sezoens">
        <img src={sezoens} alt="" />
        <p className='title'>SEZOENS</p>
        <p>
        Light and refreshing, Sezoens is characterized by a slight bitterness that caters to drinkers looking for a less intense beer. Produced by a traditional brewery, it reflects the authenticity of Belgian brewing.
        </p>
      </div>
      <div className="sezoens2">
        <img src={sezoens2} alt="" />
        <p className='title'>SEZOENS-FLORAL VARIANT</p>
        <p>
        This version of Sezoens offers a more floral flavor profile, appealing to those who enjoy subtle complexity in their beverages. It provides a refined drinking experience without overwhelming the palate.
        </p>
      </div>
      <div className="kristoffel">
        <img src={kristoffel} alt="" />
        <p className='title'>KRISTOFFEL</p>
        <p>
        The Kristoffel line is known for its three styles: White, Blonde, and Dark. Each variant features unique malt and hop blends, from the citrusy brightness of the White to the rich, caramel flavors found in the Dark.
        </p>
      </div>
    </div>
  )
}

export default ProductsCatalogue
