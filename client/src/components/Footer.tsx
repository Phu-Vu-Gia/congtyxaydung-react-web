import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BsGlobe2, BsChevronRight, BsCaretRightFill, BsGeoAltFill, BsTelephoneFill, BsEnvelopeFill, BsFacebook, BsWhatsapp } from 'react-icons/bs'
import { FaViber } from 'react-icons/fa'
import logo from '/logo.png' 

const Footer = () => {
    return (
        <footer className="bg-dark text-white py-5">
            <Container>
                <Row className="gy-4">

                    { /* 1. Contact Info */ }
                    <Col xs={12} lg={5}>
                        <h4 className="fw-bold mb-3">Thông tin liên hệ</h4>
                        <div style={{ width: '60px', height: '3px', backgroundColor: '#1087F6', marginBottom: '20px' }}></div>

                        <p className="fw-bold mb-3 fs-6">Công Ty TNHH XD & TM Quốc Cường</p>

                        { /* Location */ }
                        <p className="mb-2 d-flex align-items-center">
                            <BsGeoAltFill className="me-2 fs-6"/>
                            <span>
                                <strong>Địa chỉ: </strong>
                                <a href="https://maps.app.goo.gl/jTm7UWiX9cpSa6rF7" target="_blank" style={{ textDecoration: 'none', color: 'inherit' }}>285 Vườn Lài, P. Phú Thọ Hòa, TP.HCM</a>
                            </span>
                        </p>

                        { /* Telephone */ }
                        <p className="mb-2 d-flex align-items-center">
                            <BsTelephoneFill className="me-2 fs-6" />
                            <span>
                                <strong>Hotline:</strong> (+84) 0903 831 312 - 0988 558 879
                            </span>
                        </p>

                        { /* Email */ }
                        <p className="d-flex align-items-center">
                            <BsEnvelopeFill className="me-2 fs-6" />
                            <span>
                                <strong>Email: </strong>
                                <a href="mailto:qc@quoccuong.com.vn" style={{ textDecoration: 'none', color: 'inherit' }}>qc@quoccuong.com.vn</a>
                            </span>
                        </p>
                    </Col>


                    { /* 2. Online Consultation */ }
                    <Col xs={12} lg={5}>
                        <h4 className="fw-bold mb-2">Tư vấn trực tuyến</h4>

                        <a href="https://www.facebook.com/vu.cuong.22290" target="_blank" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <BsFacebook className="me-3 fs-3" />
                        </a>

                        <a href="https://wa.me/84903831312" target="_blank" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <BsWhatsapp className="me-3 fs-3" />
                        </a>

                        <a href="viber://chat?number=84903831312" target="_blank" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <FaViber className="me-3 fs-3" />    
                        </a>

                        <a href="https://zalo.me/0903831312" rel="noopener" target="_blank" className="text-white hover-opacity">
                            <img 
                                src="https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/zalo.svg" 
                                alt="Zalo Chat" 
                                width="22" 
                                height="22" 
                                style={{ borderRadius: '8px' }}
                            />
                        </a>
                    </Col>


                    { /* 3. Projects Nav Links */ }
                    <Col xs={12} lg={5}>
                        <h4 className="fw-bold mb-3 mt-5">Dự án</h4>
                        <div style={{ width: '60px', height: '3px', backgroundColor: '#1087F6', marginBottom: '20px' }}></div>

                        <div className="d-flex flex-wrap gap-3 mt-4">
                            {[
                                { name: "Thiết Kế Bệnh Viện", slug: "thiet-ke-benh-vien" },
                                { name: "Thiết Kế Biệt Thự", slug: "thiet-ke-biet-thu" },
                                { name: "Thiết Kế Nhà Đẹp", slug: "thiet-ke-nha-dep" },
                                { name: "Thiết Kế Nhà Xưởng", slug: "thiet-ke-nha-xuong" },
                                { name: "Thiết Kế Nhà Thép Tiền Chế", slug: "thiet-ke-nha-thep-tien-che" },
                                { name: "Thiết Kế Khách Sạn", slug: "thiet-ke-khach-san" },
                                { name: "Thiết Kế Nhà Hàng", slug: "thiet-ke-nha-hang" },
                                { name: "Thiết Kế Kho Lạnh", slug: "thiet-ke-kho-lanh" },
                                { name: "Thiết Kế Nhà Máy", slug: "thiet-ke-nha-may" },
                                { name: "Thiết Kế Trang Trại Chăn Nuôi", slug: "thiet-ke-trang-trai-chan-nuoi" },
                                { name: "Không Gian Nội Thất & Ngoại Thất", slug: "khong-gian-noi-that-ngoai-that" },
                                { name: "Dự Án Thi Công", slug: "du-an-thi-cong" }
                            ].map((project, index) => (
                                <Link
                                    key={index}
                                    to={`{/du-an/${project.slug}`}
                                    className="d-flex align-items-center fw-semibold custom-project-link text-decoration-none px-3 py-1 rounded-3 shadow-sm hover-project-btn"
                                    style={{ fontSize: '15px', transition: '0.2s' }}
                                >

                                    <BsCaretRightFill className="me-2 project-icon" style={{ fontSize: '12px' }} />
                                    {project.name}

                                </Link>
                            )) }
                        </div>
                    </Col>


                    { /* 4. Websites */ }
                    <Col xs={12} lg={5} className="mt-5">
                        <div className="d-flex align-items-center mb-2 mt-3">
                            <BsGlobe2 className="fs-4 me-2" /> {/* me-3 adds perfect spacing to the right of the globe */}
                            <h3 className="fw-bold mb-1">Websites</h3> {/* mb-0 removes the default bottom margin so it stays centered */}
                        </div>

                        <div className="d-flex flex-column">
                            {[
                                { url: "https://xaynha.com", name: "xaynha.com" },
                                { url: "https://quoccuong.com.vn", name: "quoccuong.com.vn" },
                                { url: "https://nhatienche.vn", name: "nhatienche.vn" },
                                { url: "https://nhatheptienche.net.vn", name: "nhatheptienche.net.vn" },
                                { url: "https://bietthudep.com.vn", name: "bietthudep.com.vn" }
                            ].map((site, index) => (
                                <a 
                                    key={index} 
                                    href={site.url} 
                                    target="_blank" 
                                    rel="noreferrer"
                                    className="d-flex align-items-center fw-semibold text-white text-decoration-none mb-2 custom-website-link"
                                    style={{ transition: '0.2s' }}
                                >
                                    {/* The Chevron sits right next to the text! */}
                                    <BsChevronRight className="me-1 mt-1 website-icon" style={{ fontSize: '12px', strokeWidth: '1.5px' }} />
                                    {site.name}
                                </a>
                            ))}
                        </div>
                    </Col>
                    

                    { /* 5. Company Logo */ }
                    <div className="d-flex justify-content-center mt-5">
                        <img 
                            src={logo} 
                            alt="Company Logo" 
                            style={{ height: '230px', width: '250px' }} 
                        />
                    </div>

                </Row>
            </Container>
        </footer>
    )
}

export default Footer
