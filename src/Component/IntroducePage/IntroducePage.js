import React from 'react';
import PropTypes from 'prop-types';
import "./IntroducePage.css"
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

const IntroducePage = () => {
    return (
        <div className='container'>
            <div>
                <Navbar/>
            </div>
            <div className='img__store'>
                <div className='backgroud-header'>
                    <img src='../../imgStore/bg_header.png' placeholder='backgroud header' />
                </div>
            </div>

            <div className='content__store'>
                <div className='content__store--tittle'>
                    <p>LỜI GIỚI THIỆU</p>
                </div>
                <div className='content__store--tittle_content'>
                    <p>The Coffee Factory - chuỗi cà phê rang tươi đầu tiên tại Việt Nam, luôn mong muốn mang đến những hạt cà phê chất lượng nhất.</p>
                </div>

                <div className='title-persion'>
                    <p>Dù nghề “tay mặt” thuộc lĩnh vực tài chính nhưng Nguyễn Xuân Quốc Việt vẫn nuôi đam mê tạo ra chốn thưởng thức cà phê có gu và hương vị riêng dành cho người Việt.</p>
                </div>

                <div className='img-content'>
                    <div className='img-coffee' >
                        <img src='../../imgStore/img_describe.png' />
                    </div>

                    <div className='content-side'>
                        <p className='p1'>Đi tìm mô hình “nhà máy”</p>
                        <p className='p2'>Tháng 11/2013, cửa hàng The Coffee Factory đầu tiên bắt đầu hoạt động ngay mặt tiền đường Trương Định, TP.HCM với phong cách khá lạ mắt:
                            Tất cả máy rang, xay cà phê, bàn ghế, ống nước được bố trí trong cùng một không gian nhỏ, thoáng đãng khiến thực khách đến cửa hàng thưởng thức cà phê có cảm giác như đang ngồi ngay trong nhà máy.
                        </p>
                        <p className='p3'>Nguyễn Xuân Quốc Việt chia sẻ lý do chọn thiết kế này: Một cửa hàng cà phê khác biệt phải có gu riêng về phong cách và vị cà phê trung thực.</p>

                    </div>
                </div>

                <div className='describe-content'>
                    <p className='content-p1'>Việt Nam là một trong những nước xuất khẩu cà phê lớn trên thế giới nhưng muốn thưởng thức một ly cà phê ngon thường phải vào những cửa hàng mang thương hiệu ngoại với mức giá khá cao.
                        Theo Việt, đây là thực tế khá vô lý, bởi nếu chúng ta bỏ tâm sức đi tìm những hạt cà phê ngon thì sẽ có thể pha chế những ly cà phê chất lượng với giá cả chấp nhận được. Để thực hiện ý định này, ông chủ chuỗi TCF đã mất gần 6 tháng chuẩn bị, từ việc tuyển chọn nguồn cà phê, pha chế.</p>
                    <p className='content-p2'>Tháng 6/2013, Việt bắt đầu đi tìm nguồn cà phê rang sẵn từ những nhà cung cấp đầu ngành. Mỗi loại cà phê của nhà cung cấp có hương vị riêng và sau khi thử, Việt đều ghi chép lại để đánh giá cái được và cái chưa được của từng loại. Sau đó, Việt pha trộn các loại cà phê với nhau theo một tỷ lệ nhất định để tìm ra tiêu chuẩn riêng cho TCF, cốt yếu là vị cà phê cuối cùng không bị đắng. Trên cơ sở này, Việt đi tìm nhà cung cấp máy rang, hạt cà phê xanh để rang thử từng loại, mục đích là lấy được vị đúng hoặc ngon hơn của cà phê rang sẵn.
                        Từ đó Việt mới mạnh dạn chuyển hẳn sang mua cà phê hạt thay cho loại rang sẵn. Hiện, nguồn cà phê đầu vào được ông chủ TCF tuyển chọn kỹ lưỡng từ Cầu Đất (Đà Lạt) và Đắk Lắk, vùng trồng cà phê moka và robusta ngon nhất Việt Nam.
                    </p>
                    <p className='content-p3'>
                        Việt kể, trong thời gian chuẩn bị, Việt cùng một đồng sự đi học khóa rang cà phê và thuê thêm một barista (người pha chế cà phê) để cùng nhau nghiên cứu, thử nghiệm công thức của các loại cà phê ở nhà Việt. Trong khi đó, người anh sinh đôi của Việt phụ trách thiết kế không gian cho TCF. Liên tục trong nhiều tháng, sau thời gian làm việc chính ở công ty, ngày nào nhóm của Việt cũng mày mò nghiên cứu đến 2 – 3 giờ sáng.
                        “Có ngày chúng tôi phải thử hơn chục ly cà phê các loại và hệ quả là cả nhóm không thể nào chợp mắt. Khi công đoạn pha chế gần như hoàn thiện, chúng tôi mời người thân, bạn bè đến thưởng thức để nghe họ nhận xét về “công trình” của mình”.
                    </p>
                </div>

                <div className='narrative-content'>
                    <p className='narrative'>“Có ngày chúng tôi phải thử hơn chục ly cà phê các loại và
                        hệ quả là cả nhóm không thể nào chợp mắt.”</p>
                </div>

                <div className='story-container'>
                    <div className='story-content'>
                        <p className='content1'>Những tháng đầu hoạt động, đa số phản hồi từ khách hàng là cà phê TCF có vị chua thay vì đặc quánh, có vị đắng và nhiều bọt như gu thưởng thức trước giờ của người Việt. Tuy nhiên, theo Việt, cũng chính những khách hàng này đã dần quen và cảm nhận được vị cà phê rất riêng và gu “độc” của TCF. Quan điểm của ông chủ TCF là sự nhất quán trong hương vị cà phê, ly cà phê đầu tiên phải giống như ly thứ mười. Để làm được điều này, barista phải là những người thực sựchuyên nghiệp, họ phải biết được độ nở của cà phê, độ nén của máy khi pha chế ly đầu và ly cuối khác nhau (do sức nóng của máy) để tìm ra cách làm phù hợp.
                        </p>
                    </div>

                    <div className='img-portrait'>
                        <img className='portrait' src='../../imgStore/Portrait.png' />
                    </div>
                </div>

                <div className='story-change'>
                    <p className='p-story'>
                        Chính vì muốn có sự nhất quán trong quy trình pha chế, trong hệ thống TCF hiện nay, Việt tuyển chọn 10 barista chuyên nghiệp và thành lập hẳn một Hội Barista riêng cho TCF. Trong số này có 3 barista đạt thứ hạng cao (barista tại TCF có 9 bậc) chịu trách nhiệm giám sát, kèm cặp những barista mới. Việt quan niệm, nếu bạn muốn quản lý một đội ngũ chuyên nghiệp thì ngoài cái tâm đặt vào công việc, trước hết bạn phải thể hiện sự chuyên nghiệp của một nhà quản lý; bạn phải am tường từ những điều nhỏ nhất trong chính công việc mình đảm trách.
                        Tại TCF, mỗi ngày, sau khi đóng cửa, Việt và các barista đều ngồi lại để đánh giá những việc đã làm trong ngày, kiểm điểm những điều khách hàng chưa hài lòng để khắc phục. “Đây là những chuẩn mực do chúng tôi đặt ra để tự hoàn thiện mình.
                    </p>
                    <p className='p-story'>
                        Khi được hỏi, mô hình cà phê chuỗi hiện đang bùng phát mạnh mẽ tại TP.HCM, TCF liệu có trụ vững, Việt cho biết, TCF đang đi theo chiến lược kinh doanh riêng, không đặt mục tiêu quá cao như đối đầu với các hãng cà phê ngoại hay bất kỳ một chuỗi cửa hàng phổ thông nào khác.
                        Nếu đặt trên một đồ thị giữa giá và chất lượng, được phân chia thành 4 khu vực gồm: chất lượng cao – giá cao, chất lượng cao – giá thấp, chất lượng thấp – giá cao, chất lượng cao – giá trung bình thì TCF đang tập trung vào khu vực chất lượng cao – giá trung bình.
                        “Chúng tôi chọn địa điểm mở cửa hàng phải thoáng, sử dụng được lề đường, nơi có nhiều nhân viên văn phòng Việt Nam; không nhắm đến những văn phòng thuộc công ty, tập đoàn ngoại”, Việt tiết lộ về chiến lược mở cửa hàng.
                    </p>
                    <p className='p-story'>
                        Năm nay, TCF dự kiến sẽ có 4 – 5 cửa hàng và mong muốn của ông chủ thế hệ 8X này là trong vòng 3 – 4 năm, TCF phải phát triển lên 20 – 30 cửa hàng. Việt cũng cho biết sẽ không vội vàng trong vấn đề nhượng quyền kinh doanh vì sự nóng vội dễ làm TCF mất đi những chuẩn mực riêng mà Việt và các đồng sự đã vun đắp.
                    </p>
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
};


IntroducePage.propTypes = {

};


export default IntroducePage;
