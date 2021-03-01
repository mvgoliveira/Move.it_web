export default function getThumbnailTemplate(level: string, challenges: string, exp: string) {
   return `
      <!DOCTYPE html>
      <html lang="en">
      <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      
      <title>Thumbnail</title>
      
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Rajdhani:wght@600&display=swap" rel="stylesheet" />

      <style>


         * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
         }

         body {
            display: flex;
            font: 400 1rem "Inter", sans-serif;
            color: #2E384D;
            background: #fff;
            height: 100vh;

            margin: 0 50px;
            
            line-height: 1;
         }

         #leftContainer {
            width: 100%;

            display: flex;
            flex-direction: column;
            
            justify-content: center;
            align-items: center;

            text-align: center;
         }

         #leftContainer header{
            color: #5965E0;
            font-size: 19.129rem;
            font-weight: 600;
            /* background: url('http://localhost:3000/icons/levelup.svg') no-repeat center;
            background-size: contain; */

            background-image: url('http://localhost:3000/icons/levelup-left.svg'), url('http://localhost:3000/icons/levelup-right.svg');
            background-position: left, right;
            background-repeat: no-repeat, no-repeat;
         }

         #leftContainer p {
            max-width: 408px;
            font-size: 3.5rem;
            font-weight: bold;
         }

         #rightContainer {
            width: 100%;

            display: flex;
            flex-direction: column;
            
            justify-content: center;
            align-items: center;

            text-align: start;
         }

         #rightContainer > div {
            width: 342px;
         }
         
         #rightContainer span {
            display: block;
            color: rgb(102, 102, 102, 0.5);
            font-size: 1.5rem;
            font-weight: 600;
            margin-bottom: 15px;
         }

         #rightContainer p {
            border-top: 50px;
            color: #666;
            font-size: 2.5rem;
            font-weight: 500;
         }

         #rightContainer strong {
            color: #5965E0;
            font-weight: 500;
         }

         #desafios {
            padding-bottom: 32px;
            border-bottom: 2px solid #DCDDE0;
         }

         #experiencia {
            margin-top: 32px;
            padding-bottom: 32px;
            border-bottom: 2px solid #DCDDE0;
         }

         #logo {
            margin-top: 84px;
         }

      </style>
      </head>
      <body>
         <div id="leftContainer">
            <header>${level}</header>
            <p>Avancei para o próximo level</p>
         </div>

         <div id="rightContainer">
            <div>
               <div id="desafios">
                  <span>DESAFIOS</span>
                  <p><strong>${challenges}</strong> completados</p>
               </div>
   
               <div id="experiencia">
                  <span>EXPERIÊNCIA</span>
                  <p><strong>${exp}</strong> xp</p>
               </div>
   
               <img src="http://localhost:3000/logo-blue.svg" id="logo" width="250" alt="Move.it logo">
            </div>
         </div>
      </body>
      </html>

   `;
}