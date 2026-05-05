import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap"
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <Navbar variant="dark" expand="lg" sticky="top" className="py-3 shadow" style={{ backgroundColor: '#1F242C', zIndex: 1000 }}>
            <Container fluid className="px-4">
                
                {/* The Brand Logo */}
                <Navbar.Brand as={Link} to="/" className="fw-bold fs-2" style={{ color: '#F8F9FA' }}>
                Quốc Cường
                </Navbar.Brand>

                {/* 🍔 THE HAMBURGER BUTTON 🍔 */}
                {/* This button is completely invisible on Desktop, and automatically appears on Mobile */}
                <Navbar.Toggle aria-controls="quoccuong-navbar-nav" />

                {/* Everything inside 'Collapse' gets stuffed inside the hamburger on mobile, 
                    but spreads out perfectly on desktop! */}
                <Navbar.Collapse id="quoccuong-navbar-nav">
                
                    {/* 'ms-auto' pushes all these links completely to the right side of the screen */}
                    <Nav className="ms-auto fw-semibold">
                        
                        {/* Dropdown Menus matching your screenshot */}
                        <NavDropdown title={<span style={{ color: '#F8F9FA' }}>Giới Thiệu</span>} id="gioi-thieu-dropdown" className="mx-2">
                        <NavDropdown.Item as={Link} to="/ve-chung-toi">Về Chúng Tôi</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/doi-ngu">Đội Ngũ Kỹ Sư</NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown title={<span style={{ color: '#F8F9FA' }}>Nhà Phố</span>} id="nha-pho-dropdown" className="mx-2">
                        <NavDropdown.Item as={Link} to="/nha-pho-hien-dai">Hiện Đại</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/nha-pho-tan-co-dien">Tân Cổ Điển</NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown title={<span style={{ color: '#F8F9FA' }}>Biệt Thự</span>} id="biet-thu-dropdown" className="mx-2">
                        <NavDropdown.Item as={Link} to="/biet-thu-vuon">Biệt Thự Vườn</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/biet-thu-hien-dai">Biệt Thự Hiện Đại</NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown title={<span style={{ color: '#F8F9FA' }}>Dự Án</span>} id="du-an-dropdown" className="mx-2">
                        <NavDropdown.Item as={Link} to="/du-an-hoan-thanh">Đã Hoàn Thành</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/du-an-dang-thi-cong">Đang Thi Công</NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown title={<span style={{ color: '#F8F9FA' }}>Dịch Vụ</span>} id="dich-vu-dropdown" className="mx-2">
                        <NavDropdown.Item as={Link} to="/thiet-ke">Thiết Kế</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/thi-cong">Thi Công Trọn Gói</NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown title={<span style={{ color: '#F8F9FA' }}>Tin Tức</span>} id="tin-tuc-dropdown" className="mx-2">
                        <NavDropdown.Item as={Link} to="/tin-tuc">Bản Tin Kiến Trúc</NavDropdown.Item>
                        </NavDropdown>

                        {/* Language Selector at the far right */}
                        <NavDropdown title={<span style={{ color: '#F8F9FA' }}>VIE</span>} id="lang-dropdown" className="mx-2 border-start border-secondary ps-2">
                        <NavDropdown.Item href="#en">ENG</NavDropdown.Item>
                        </NavDropdown>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header