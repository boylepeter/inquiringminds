
const Pricing = () => {
    return (
        <div className="pricing-container">
            <br />
            <div className="pricing-list">
                <h1 className="pricing-li">1 Presentation for $95</h1>
                <h1 className="pricing-li">3 Presentations for $250</h1>
                <h1 className="pricing-li">5 Presentations for $350</h1>
            </div>
            <br />
            <form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post" >
                <input type="hidden" name="cmd" value="_s-xclick" />
                <input type="hidden" name="encrypted" value="-----BEGIN PKCS7-----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-----END PKCS7-----" />
                <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
                <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
            </form>
        </div>
    )
};

export default Pricing;