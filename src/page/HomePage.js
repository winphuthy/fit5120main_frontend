import * as React from 'react';
import ProductHero from "../templates/modules/views/ProductHero";
import ProductValues from "../templates/modules/views/ProductValues";
/*
import ProductCategories from "../templates/modules/views/ProductCategories";
import ProductHowItWorks from "../templates/modules/views/ProductHowItWorks";
import ProductCTA from "../templates/modules/views/ProductCTA";
import ProductSmokingHero from "../templates/modules/views/ProductSmokingHero";
*/
import AppFooter from "../templates/modules/views/AppFooter";

export default function HomePage() {
    return (
        // <AppTheme title="Onepirate theme - MUI" description="A onepirate theme">
        <div>
            <React.Fragment>
                {/*<AppAppBar />*/}
                <ProductHero />
                <ProductValues />
                {/*<ProductCategories />*/}
                {/*<ProductHowItWorks />*/}
                {/*<ProductCTA />*/}
                {/*<ProductSmokingHero />*/}
                <AppFooter />
            </React.Fragment>
        </div>
        // </AppTheme>
    );
}
