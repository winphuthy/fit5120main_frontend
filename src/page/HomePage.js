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
import InteractionChart from "../components/InteractionChart";

export default function HomePage() {
    return (
        // <AppTheme title="Onepirate theme - MUI" description="A onepirate theme">
        <div>
            <React.Fragment>
                {/*<AppAppBar />*/}
                <ProductHero />
                <div style={{background:"#333", height: "auto", paddingTop: '50px', paddingBottom: '50px'}}>
                    <div style={{width: '70%', margin: "auto", color: "whitesmoke"}}>

                        <h3>Why are we doing this?</h3>
                        <p>Our team at Silicon Sharks have come to realise that more and more things in life are becoming readily accessible only to those with both knowledge and access to technology. We know from our data on the left of this, that Victorians from the age of 50 and above have always struggled to feel as digitally included as people in other age groups. Don’t believe it?</p>
                        <p>Filter through the different years to see the ever-present Digital Divide. With more and more things becoming digitised, we want to provide an easy to navigate platform in which users can easily learn how to access a multitude of digital services and platforms that they could then integrate into their lives, by providing clear yet concise step-by-step instructions on how to do the things they would like to do.</p>

                        <div style={{width:"50%", height: "500px", margin: "auto", marginTop: '20px'}} >
                            <InteractionChart/>
                        </div>

                    </div>
                </div>
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
