import React from 'react';
import {Link} from 'gatsby';
import {StyledImg, CTAImage, CTAImageTextWrapper, CTAImageText} from './CTA.styles';

function CTA({image, link, text}) {
    return (
        <CTAImage>
            <StyledImg image={image} alt="CTA Image" />
            <Link to={link}>
                <CTAImageTextWrapper>
                    <CTAImageText>{text}</CTAImageText>
                </CTAImageTextWrapper>
            </Link>
        </CTAImage>
    )
}

export default CTA
