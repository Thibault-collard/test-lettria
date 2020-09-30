import  styled  from  'styled-components';

export const AppStyle = styled.div`
 .container-box{
  font-family: Montserrat,sans-serif !important;
  color:#444;
  font-size: 0.8rem;
  font-weight: 100;
  background-color:#fafafa;
  height: 100vh;
  width: 100vw;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: center;
  justify-content: center;
  -ms-flex-align: center;
  align-items: center;
}

 .login-box{
  border-radius: .3rem;
  background-color: #fff;
  width: -webkit-fit-content;
  width: -moz-fit-content;
  width: fit-content;
  padding: 6px 10px;
  display: block;
  margin: auto;
  -webkit-box-shadow: 0 1px 4px rgba(18,24,38,.05);
  box-shadow: 0 1px 4px rgba(18,24,38,.05);
 }

 .home-logo{
  width: 85px;
  margin: auto;
  display: block;
  padding: 1rem;
 }

 .form-control{
  height: auto;
  background: #fff;
  background-clip: border-box;
  border-radius: .3rem;
  display: block;
  line-height: 1.5;
  color:#2e2e2e;
  background-clip: padding-box;
  border: 1px solid #e8e8e8;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
 }

 .btn-primary{
  background-color:#385fbd;
  font-size: 1.3rem;
  color:#fff;
  padding: 1rem 2rem;
  width: 100%;
  line-height: 1rem;
  text-align: center;
  display: inline-block;
  border-radius: 2px;
 }

 .panel{
  max-width: 990px;
  margin: auto;
  display: block;
  padding: 2rem 2.5rem;
  color: #444;
 }
 .panel-label{
  font-size: 1.9rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
 }
 .control-label{
  display: block;
  margin: 0.5rem;
  font-size: 1rem;
  font-weight: 600;
 }
 .update-account{
  background-color:#385fbd !important;
  border-color:#385fbd !important;
  color:#fff;
  margin:10px;
 }
 .box-data{
  width:80%;
  display: inline-block;
  word-wrap: break-word
 }`