function Hero(){
    return <main className="hero container">
        <div className="hero-content">
            <h1>Your feet deserve the best</h1>
            <p>Your feet deserve the best and we are here to help you with our shoes. Your feet deserve the best and we are here to help you with our shoes.</p>

            <div className="hero-btn">
        <button>
            Shop Now
        </button>
        <button className="secondary-btn">
            Category
        </button>
        </div>

        <div className="shopping">
            <p>Also available on</p>

            <div className="brand-icons">
                <img src="/images/amazon.png" alt ="img"></img>
                <img src="/images/flipkart.png"  alt="img" />
            </div>
        </div>
        </div>

        <div className="hero-img"> 
        <img src="/images/hero-image.png" alt ="img"></img>
        </div>
    </main>
}


export default Hero