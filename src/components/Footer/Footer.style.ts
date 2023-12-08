import styled from 'styled-components';

type FooterProps = {
	$isMaxWidth?: boolean;
	$isTablet?: boolean;
	$isMobile?: boolean;
};

export const FooterLogoH1 = styled.h1<FooterProps>`
	width: ${(props) => (props.$isMobile ? '35%' : null)};
	margin: ${(props) => (props.$isMobile ? '0 auto 30px' : null)};
	cursor: pointer;
	img {
		width: 100%;
	}
`;
export const FooterDiv = styled.div`
	width: 100%;
	height: 420px;
	background-color: var(--color-deep-blue);
`;
export const FooterInnerDiv = styled.div<FooterProps>`
	position: relative;
	max-width: 1320px;
	width: 100%;
	height: 100%;
	padding: ${(props) => (props.$isMaxWidth ? '55px 30px 0' : null)};
	padding-top: ${(props) => (props.$isMobile ? '30px' : '55px')};
	margin: auto;
`;
export const FooterFlexDiv = styled.div<FooterProps>`
	display: flex;
	justify-content: space-between;
	flex-wrap: ${(props) => (props.$isMobile ? 'wrap' : 'no-wrap')};
`;
export const FooterMenuDiv = styled(FooterFlexDiv)`
	/* width: 38%; */
`;
export const FooterMenuDl = styled.dl<FooterProps>`
	min-width: 112px;
	margin-left: ${(props) => (props.$isMobile ? '2px' : '20px')};
`;
export const FooterDt = styled.dt<FooterProps>`
	margin-bottom: ${(props) => (props.$isMobile ? '8px' : '16px')};
	font-size: ${(props) =>
		props.$isTablet ? '22px' : props.$isMobile ? '18px' : '24px'};
	line-height: 1.6;
	color: var(--color-peach);
`;
export const FooterMenuDD = styled.dd<FooterProps>`
	line-height: 1.8;
	color: var(--color-peach);
	font-size: ${(props) => props.$isMobile && '14px'};
	cursor: pointer;
	.footerText {
		color: var(--color-peach);
	}
`;
export const FooterCopyrightDiv = styled.div`
	position: absolute;
	bottom: 0;
	width: calc(100% - 60px);
	border-top: 1px solid var(--color-peach);
	text-align: center;
`;
export const FooterCopyrightP = styled.p<FooterProps>`
	width: 100%;
	padding: 20px 0;
	color: var(--color-peach);
	font-size: ${(props) => (props.$isMobile ? '12px' : '16px')};
`;
