import styled from 'styled-components';
import BannerDescription from '@components/Details/BannerDescription';
interface DataProps {
	data: any;
}
const Banner = ({ data }: DataProps) => {
	return (
		<BannerLayout>
			<BannerImg src={data.mainimg} />
			<BannerDescription data={data} />
		</BannerLayout>
	);
};
const BannerLayout = styled.div`
	background-color: #333333;
	height: 400px;
	width: 100vw;
	display: flex;
	align-items: center;
`;
const BannerImg = styled.img`
	background-color: #000000;
	width: 515px;
	height: 301px;
	margin-left: 171px;
`;

export default Banner;
