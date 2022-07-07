import React from "react";
import PropTypes from "prop-types";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <div className="footer-container">
        <div className="info-company">
          <div>
            <h1 className="info-title">THÔNG TIN</h1>
          </div>
          <div className="logo-footer">
            <img className="img-logo" src="../../img/logo_footer.png" alt="logo" />
          </div>

          <div className="time-open-close">
            <div className="icon-clock">
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.157 0.000804411L0.664795 2.65918L1.54582 3.59895L4.03803 0.940575L3.157 0.000804411Z"
                  fill="white"
                />
                <path
                  d="M11.5077 -0.000317336L10.6267 0.939453L13.1189 3.59783L13.9999 2.65806L11.5077 -0.000317336Z"
                  fill="white"
                />
                <path
                  d="M7.33216 13.089C4.24264 13.089 1.729 10.4078 1.729 7.11224C1.729 3.81673 4.24264 1.1355 7.33216 1.1355C10.4217 1.1355 12.9353 3.81673 12.9353 7.11224C12.9353 10.4078 10.4217 13.089 7.33216 13.089ZM7.33216 2.46366C4.92903 2.46366 2.97415 4.54888 2.97415 7.11224C2.97415 9.6756 4.92903 11.7608 7.33216 11.7608C9.73528 11.7608 11.6902 9.6756 11.6902 7.11224C11.6902 4.54888 9.73528 2.46366 7.33216 2.46366Z"
                  fill="white"
                />
                <path
                  d="M8.75941 9.57449L6.8917 7.58224C6.77496 7.45773 6.70959 7.28839 6.70959 7.11241V3.79199H7.95474V6.83681L9.64035 8.63481L8.75941 9.57449Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="info-time">
              <p>Giờ mở cửa: 06:30</p>
              <p>Giờ đóng cửa: 23:30</p>
            </div>
          </div>

          <div className="text-phone">
            <div className="icon-text">
              <svg
                width="11"
                height="12"
                viewBox="0 0 11 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.3889 12H7.94444C3.56431 12 0 8.11167 0 3.33333V0.666667C0 0.298333 0.273472 0 0.611111 0H3.66667C3.94778 0 4.19222 0.208333 4.25944 0.505L4.87056 3.17167C4.94083 3.475 4.80792 3.79 4.55125 3.93L3.685 4.40167C3.85764 6.28667 5.23722 7.79 6.96514 7.98L7.3975 7.035C7.52583 6.755 7.81458 6.61 8.09264 6.68667L10.5371 7.35333C10.809 7.42833 11 7.69333 11 8V11.3333C11 11.7017 10.7265 12 10.3889 12ZM1.22222 1.33333V3.33333C1.22222 7.37667 4.23806 10.6667 7.94444 10.6667H9.77778V8.52L8.27139 8.11L7.88028 8.965C7.77639 9.19 7.56556 9.33333 7.33333 9.33333C4.63681 9.33333 2.44444 6.94 2.44444 4C2.44444 3.74667 2.57583 3.51667 2.78208 3.40333L3.56583 2.97667L3.19 1.33333H1.22222Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="info-text">
              <p>028 6652 3777</p>
            </div>
          </div>

          <div className="connect-web">
            <div className="icon-web">
              <svg
                width="13"
                height="14"
                viewBox="0 0 13 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.67641 13.2817C3.24292 13.2817 0.450684 10.3032 0.450684 6.64083C0.450684 2.97841 3.24292 0 6.67641 0C10.1099 0 12.9021 2.97841 12.9021 6.64083C12.9021 10.3032 10.1099 13.2817 6.67641 13.2817ZM6.67641 1.32817C3.92931 1.32817 1.69583 3.71222 1.69583 6.64083C1.69583 9.56943 3.92931 11.9535 6.67641 11.9535C9.42351 11.9535 11.657 9.56943 11.657 6.64083C11.657 3.71222 9.42351 1.32817 6.67641 1.32817Z"
                  fill="white"
                />
                <path
                  d="M11.9558 7.96899H1.39697V9.29716H11.9558V7.96899Z"
                  fill="white"
                />
                <path
                  d="M11.9558 3.98462H1.39697V5.31278H11.9558V3.98462Z"
                  fill="white"
                />
                <path
                  d="M5.47021 12.8567C4.62974 10.9225 4.18616 8.77256 4.18616 6.64086C4.18616 4.50915 4.62974 2.35919 5.47021 0.425049L6.60018 0.982876C5.83597 2.74435 5.4313 4.70008 5.4313 6.64086C5.4313 8.58164 5.83597 10.5374 6.60018 12.2988L5.47021 12.8567Z"
                  fill="white"
                />
                <path
                  d="M7.88265 12.8567L6.75269 12.2988C7.51689 10.5374 7.92157 8.58164 7.92157 6.64086C7.92157 4.70008 7.51689 2.74435 6.75269 0.982876L7.88265 0.425049C8.72313 2.35919 9.16671 4.50915 9.16671 6.64086C9.16671 8.77256 8.72313 10.9225 7.88265 12.8567Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="info-web">
              <a href="http://www.thecoffeefactory.com.vn">
                <p>http://www.thecoffeefactory.com.vn</p>
              </a>
            </div>
          </div>

          <div className="connect-mail">
            <div className="icon-mail">
              <svg
                width="13"
                height="11"
                viewBox="0 0 13 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.2796 10.6251H1.07326C0.729285 10.6251 0.450684 10.3279 0.450684 9.961V0.663839C0.450684 0.296933 0.729285 -0.000244141 1.07326 -0.000244141H12.2796C12.6235 -0.000244141 12.9021 0.296933 12.9021 0.663839V9.961C12.9021 10.3279 12.6235 10.6251 12.2796 10.6251ZM1.69583 9.29692H11.657V1.32792H1.69583V9.29692Z"
                  fill="white"
                />
                <path
                  d="M6.67643 7.305C6.51768 7.305 6.35737 7.24025 6.23596 7.11075L0.632812 1.13401L1.51375 0.194336L6.67643 5.70124L11.8391 0.194336L12.7201 1.13401L7.1169 7.11075C6.9955 7.24025 6.83675 7.305 6.67643 7.305Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="info-mail">
              <a href="mailto:tcfthecoffeefactory@gmail.com">
                <p>tcfthecoffeefactory@gmail.com</p>
              </a>
            </div>
          </div>

          <div className="address">
            <div className="icon-address">
              <svg
                width="11"
                height="14"
                viewBox="0 0 11 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.96422 13.2829C5.79768 13.2829 5.63737 13.2115 5.52064 13.0836C5.05682 12.5789 0.983643 8.07315 0.983643 5.31388C0.983643 2.38528 3.21712 0.0012207 5.96422 0.0012207C8.71132 0.0012207 10.9448 2.38528 10.9448 5.31388C10.9448 8.07315 6.87318 12.5789 6.4078 13.0836C6.29107 13.2115 6.13076 13.2829 5.96422 13.2829ZM5.96422 1.32939C3.90506 1.32939 2.22879 3.11743 2.22879 5.31388C2.22879 6.98737 4.61946 10.0986 5.96422 11.6542C7.30898 10.0986 9.69965 6.98903 9.69965 5.31388C9.69965 3.11743 8.02338 1.32939 5.96422 1.32939Z"
                  fill="white"
                />
                <path
                  d="M5.96429 7.96964C4.59152 7.96964 3.474 6.77762 3.474 5.31331C3.474 3.84901 4.59152 2.65698 5.96429 2.65698C7.33706 2.65698 8.45458 3.84901 8.45458 5.31331C8.45458 6.77762 7.33706 7.96964 5.96429 7.96964ZM5.96429 3.98515C5.2779 3.98515 4.71914 4.58116 4.71914 5.31331C4.71914 6.04546 5.2779 6.64148 5.96429 6.64148C6.65067 6.64148 7.20943 6.04546 7.20943 5.31331C7.20943 4.58116 6.65067 3.98515 5.96429 3.98515Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="info-address">
              <p>
                456/59 Cao Thắng nối dài, Phường 12, Quận 10, Thành phố Hồ Chí
                Minh
              </p>
            </div>
          </div>
        </div>
        <div className="quick-link">
          <h2 className="title-link">LIÊN KẾT NHANH</h2>
          <div className="detail-link">
            <a href="/">Trang Chủ</a>
            {/* <p>Trang Chủ</p> */}
            <a href="/">Sản Phẩm</a>
            <a href="/">Thông Tin Ưu Đãi</a>
            <a href="">Liên Hệ</a>
            <a href="/">Cửa Hàng</a>
          </div>
        </div>
        <div className="provision">
          <h2 className="title-provision">ĐIỀU KHOẢN</h2>
          <div className="detail-rules">
            <p>Điều kiện sử dụng</p>
            <p>Quy tắc bảo mật</p>
            <img className="QR" src="../../img/qrcode.png" alt="QR" />
          </div>
        </div>
        <div className="subscribe">
          <h2 className="title-subscribe">ĐĂNG KÝ NHẬN BẢN TIN</h2>
          <div className="description-sub">
            <p>
              Xin vui lòng để lại địa chỉ email, chúng tôi sẽ cập nhật những
              thông tin khuyến mãi hấp dẫn tới quý khách hàng.
            </p>
          </div>
          <div className="input-info">
            <input
              className="input-button"
              type="text"
              placeholder="Họ và Tên"
            ></input>
            <input
              className="input-button"
              type="email"
              placeholder="Email"
            ></input>
            <button className="button-sub" type="button">
              ĐĂNG KÝ
            </button>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>
          © Bản quyền thuộc về <strong>The Coffee Factory</strong>
        </p>
      </div>
    </div>
  );
};

Footer.propTypes = {};

export default Footer;
