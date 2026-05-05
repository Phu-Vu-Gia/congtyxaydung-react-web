import { Carousel, Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom"

// Importing some images for the hero section
import img1 from "../assets/houses/nha-pho-chi-hong.png"
import img2 from "../assets/houses/nha-hien-dai-5-tang.jpg"
import img3 from "../assets/houses/nha-pho-5-tang.jpg"
import img4 from "../assets/houses/nha-pho-anh-quang.jpg"
import img5 from "../assets/houses/nha-pho-anh-son.jpg"

const HeroSection = () => {
    const navigate = useNavigate()

    return (
        // The 'fade' property makes it transition smoothly instead of sliding aggressively
        <Carousel fade nextLabel="" prevLabel="">

            { /* Slide 1: Nhà phố chị Hồng */}
            <Carousel.Item style={{ height: '90vh' }}>
                <img
                    className="d-block w-100 h-100"
                    src={img1}
                    alt="Nhà Phố Hiện Đại"
                    style={{ objectFit: 'contain', filter: 'brightness(100%)', backgroundColor: '#e6e9ed' }}
                />

                <Carousel.Caption className="d-flex flex-column justify-content-center h-100">
                    <div className="p-4 bg-dark bg-opacity-75 rounded text-white hero-caption-box" style={{ maxWidth: '80%', margin: '0 auto' }}>
                        <h4 className="display-3 fw-bold fs-4 text-white mb-3">
                            Nhà Phố Hiện Đại Ở Cần Thơ
                        </h4>

                        <p className="lead fs-6 text-light mb-3">
                            Thiết kế xây nhà ở Cần Thơ với không gian mở 4 tầng, phong cách đơn giản nhưng mang lại sự sang trọng cho căn nhà.
                        </p>

                        <div>
                            <Button onClick={() => navigate("/du-an")} variant="info" size="sm" className="fw-bold px-2 watchDetailHS">
                                Xem Chi Tiết
                            </Button>
                        </div>
                    </div>
                </Carousel.Caption>

            </Carousel.Item>


            { /* Slide 2: Nhà hiện đại 5 tầng */}
            <Carousel.Item style={{ height: '90vh' }}>
                <img
                    className="d-block w-100 h-100"
                    src={img2}
                    alt="Nhà Phố Hiện Đại 5 Tầng"
                    style={{ objectFit: 'contain', filter: 'brightness(100%)', backgroundColor: '#e6e9ed' }}
                />

                <Carousel.Caption className="d-flex flex-column justify-content-center h-100">
                    <div className="p-4 bg-dark bg-opacity-75 rounded text-white hero-caption-box" style={{ maxWidth: '80%', margin: '0 auto' }}>
                        <h4 className="display-3 fw-bold fs-4 text-white mb-3">
                            Nhà Phố Hiện Đại 5 Tầng
                        </h4>

                        <p className="lead fs-6 text-light mb-3">
                            Thiết kế và xây nhà 5 tầng với không gian mở, phong cách hiện đại kết hợp với sự sang trọng, làm nổi bật vẻ đẹp của căn nhà.
                        </p>

                        <div>
                            <Button onClick={() => navigate("/du-an")} variant="info" size="sm" className="fw-bold px-2 watchDetailHS">
                                Xem Chi Tiết
                            </Button>
                        </div>
                    </div>
                </Carousel.Caption>

            </Carousel.Item>


            { /* Slide 3: Nhà hiện đại 5 tầng */}
            <Carousel.Item style={{ height: '90vh' }}>
                <img
                    className="d-block w-100 h-100"
                    src={img3}
                    alt="Nhà Phố Tân Cổ Điển 5 Tầng"
                    style={{ objectFit: 'contain', filter: 'brightness(100%)', backgroundColor: '#e6e9ed' }}
                />

                <Carousel.Caption className="d-flex flex-column justify-content-center h-100">
                    <div className="p-4 bg-dark bg-opacity-75 rounded text-white hero-caption-box" style={{ maxWidth: '80%', margin: '0 auto' }}>
                        <h4 className="display-3 fw-bold fs-4 text-white mb-3">
                            Nhà Phố Tân Cổ Điển 5 Tầng
                        </h4>

                        <p className="lead fs-6 text-light mb-3">
                            Thiết kế và xây nhà 5 tầng với không gian mở, phong cách tân cổ điển kết hợp với sự sang trọng, làm nổi bật vẻ đẹp của căn nhà.
                        </p>

                        <div>
                            <Button onClick={() => navigate("/du-an")} variant="info" size="sm" className="fw-bold px-2 watchDetailHS">
                                Xem Chi Tiết
                            </Button>
                        </div>
                    </div>
                </Carousel.Caption>

            </Carousel.Item>


            { /* Slide 4: Nhà phố anh Quang */}
            <Carousel.Item style={{ height: '90vh' }}>
                <img
                    className="d-block w-100 h-100"
                    src={img4}
                    alt="Nhà Phố Hiện Đại"
                    style={{ objectFit: 'contain', filter: 'brightness(100%)', backgroundColor: '#e6e9ed' }}
                />

                <Carousel.Caption className="d-flex flex-column justify-content-center h-100">
                    <div className="p-4 bg-dark bg-opacity-75 rounded text-white hero-caption-box" style={{ maxWidth: '80%', margin: '0 auto' }}>
                        <h4 className="display-3 fw-bold fs-4 text-white mb-3">
                            Nhà Phố Hiện Đại Ở Quận 4, Sài Gòn
                        </h4>

                        <p className="lead fs-6 text-light mb-3">
                            Thiết kế xây nhà ở Sài Gòn với không gian mở 4 tầng, phong cách đơn giản nhưng mang lại sự sang trọng cho căn nhà.
                        </p>

                        <div>
                            <Button onClick={() => navigate("/du-an")} variant="info" size="sm" className="fw-bold px-2 watchDetailHS">
                                Xem Chi Tiết
                            </Button>
                        </div>
                    </div>
                </Carousel.Caption>

            </Carousel.Item>


            { /* Slide 5: Nhà phố anh Quang */}
            <Carousel.Item style={{ height: '90vh' }}>
                <img
                    className="d-block w-100 h-100"
                    src={img5}
                    alt="Nhà Phố Hiện Đại"
                    style={{ objectFit: 'contain', filter: 'brightness(100%)', backgroundColor: '#e6e9ed' }}
                />

                <Carousel.Caption className="d-flex flex-column justify-content-center h-100">
                    <div className="p-4 bg-dark bg-opacity-75 rounded text-white hero-caption-box" style={{ maxWidth: '80%', margin: '0 auto' }}>
                        <h4 className="display-3 fw-bold fs-4 text-white mb-3">
                            Nhà Phố Hiện Đại Ở Thủ Đức, Sài Gòn
                        </h4>
                        
                        <p className="lead fs-6 text-light mb-3">
                            Thiết kế xây nhà ở Thủ Đức với không gian mở 4 tầng, phong cách đơn giản nhưng mang lại sự sang trọng cho căn nhà.
                        </p>

                        <div>
                            <Button onClick={() => navigate("/du-an")} variant="info" size="sm" className="fw-bold px-2 watchDetailHS">
                                Xem Chi Tiết
                            </Button>
                        </div>
                    </div>
                </Carousel.Caption>

            </Carousel.Item>

        </Carousel>
    )
}

export default HeroSection