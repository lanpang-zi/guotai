import styled from 'styled-components';
import { Divider } from 'antd';

export const LoginTopWrap = styled.div`
    width: 100%;
    height: auto;
    margin-top: 10px;
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
`;

export const LoginTopList = styled.div`
    display: flex;
    margin: 7px 10px;
    padding: 7px 0;
`;

export const LoginTopLeft = styled.div`
    flex: 1;
    border-right: 1px dashed #ccc;
    a {
        display: flex;
        color: #444;
    }
`;

export const LoginTopRight = styled.div`
    flex: 1;
    margin-left: 10px;
    a {
        display: flex;
        color: #444;
    }
`;

export const LoginTopCir = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: #f40;
    display: flex;
    align-items: center;
    justify-content: space-around;
    color: #fff;
    margin-right: 10px;
`;

export const DividerLine = styled(Divider)`
    width: 92% !important;
    min-width: 92% !important;
    margin: 10px 16px !important;
`;