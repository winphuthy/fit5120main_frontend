import * as React from 'react';
import Typography from '../components/Typography';
import ProductHeroLayout from './ProductHeroLayout';
import mainPageImage from '../../../images/mainpage.jpg';

// const backgroundImage =
//   'https://images.unsplash.com/photo-1534854638093-bada1813ca19?auto=format&fit=crop&w=1400';

export default function ProductHero() {
  return (
    <ProductHeroLayout
      sxBackground={{
        backgroundImage: `url(${mainPageImage})`,
        backgroundColor: '#7fc7d9', // Average color of the background image.
        backgroundPosition: 'center',
      }}
    >
      {/* Increase the network loading priority of the background image. */}
      <img
        style={{ display: 'none' }}
        src={mainPageImage}
        alt="increase priority"
      />
      <Typography color="inherit" align="center" variant="h2">
        Bridging the Digital Divide
      </Typography>
      <Typography
        color="inherit"
        align="center"
        variant="h5"
        sx={{ mb: 4, mt: { xs: 4, sm: 10 } }}
      >
          Helping Seniors Get Online
      </Typography>
    </ProductHeroLayout>
  );
}
