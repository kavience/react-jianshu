import styled from 'styled-components';

export const HomeWrapper = styled.div`
    width: 960px;
    margin: 0 auto;
    overflow: hidden;
`;

export const HomeLeft = styled.div`
    margin-left: 15px;
    padding-top: 30px;
    width: 625px;
    float: left;
    .banner_img {
        width: 625px;
        height: 240px;
    }
`;

export const HomeRight = styled.div`
    width: 280px;
    float: right;  
`;

export const TopicWrapper = styled.div`
    padding: 20px 0 10px 0;
    overflow: hidden;
    margin-left: -10px;
    border-bottom: 1px solid #dcdcdc;
`;

export const TopicItem = styled.div`
    float: left;
	height: 32px;
	line-height: 32px;
	margin-left: 18px;
	margin-bottom: 18px;
	padding-right: 10px
	background: #f7f7f7;
	font-size: 14px;
	color: #000;
	border: 1px solid #dcdcdc;
	border-radius: 4px;
	.topic-pic {
		display: block;
		float: left;
		width: 32px;
		height: 32px;
		margin-right: 10px;
	}
`;

export const ListItem = styled.div`
	overflow: hidden;
	padding: 20px 0;
	border-bottom: 1px solid #dcdcdc;
	.pic {
		display: block;
		width: 125px;
		height: 100px;
		float: right;
		border-radius: 10px;
	}
`;

export const ListInfo =	styled.div`
	width: 500px;
	float: left;
	.title {
		line-height: 27px;
		font-size: 18px;
		font-weight: bold;
		color: #333;
	}
	.desc {
		line-height: 24px;
		font-size: 13px;
		color: #999;
	}
`;

export const RecommendWrapper =	styled.div`
	margin: 30px 0;
	width: 280px;
	
`;

export const RecommendItem =	styled.div`
	width: 280px;
	height: 50px;
	background: url(${(props) => props.imgUrl});
	background-size: contain;
`;

export const WriterWrapper = styled.div`
	width: 278px;
	.view-all {
	    text-align: center;
	    padding: 7px 7px 7px 12px;   
	    color: #787878;
	    background-color: #f7f7f7;
	    border: 1px solid #dcdcdc;
	    border-radius: 4px;
	    margin-top: 20px;
	    font-size: 13px;
	}
`;
export const WriterInfoTitle = styled.div`
	height: 20px
	color: #969696;
`;
export const WriterInfoChange = styled.div`
    float: right;	
`;
export const WriterItem = styled.div`
	height: 47px;
	margin-top: 15px;
	.avatar {
	    width: 48px;
	    height: 48px;
	    border-radius: 50%;
	    float: left;
	    margin-right: 10px;
	}
	.auth-info {
	    font-size: 14px;
	    width: 220px;
	    margin-top: -10px;
	    padding-top: 6px;
        float: left;
        .nick_name {
            display: inline-block;
            margin: 5px 0 0 0 ;
        }
        .desc {
            font-size: 12px;
            color: #969696;
            margin: 2px 0 10px 0;
        }
        .add {
            display: inline-block;
            margin: 0;
            float: right;
            font-size: 13px;
            color: #42c02e;
        }
	}
`;

export const LoadMore = styled.div`
    width: 100%;
    height: 40px;
    line-height: 40px;
    background: #a5a5a5;
    text-align: center;
    border-radius: 20px;
    color: #fff;
    margin: 30px 0;
    cursor: pointer;
`;

export const BackTop = styled.div`
    position: fixed;
    right: 100px;
    font-size: 14px;
    bottom: 100px;
    width: 60px;
    height: 60px;
    line-height: 60px;
    text-align: center;
    border: 1px solid #ccc;
    
`;