import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
   static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap"
            rel="stylesheet"
          />
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-KXPZNDPMVE"
          ></script>
          <script
            async
            dangerouslySetInnerHTML={{
              __html: `window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
            
              gtag('config', 'G-KXPZNDPMVE');`,
            }}
          />
          <script
            async
            dangerouslySetInnerHTML={{
              __html: `(function(c,l,a,r,i,t,y){
                        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                        })(window, document, "clarity", "script", "7yaxxd6y7w");`,
            }}
          ></script>
          <script
            async
            dangerouslySetInnerHTML={{
              __html: `<script>!function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '438345187662320');
              fbq('track', 'PageView');
              </script>
              <noscript><img height="1" width="1" style="display:none"
              src="https://www.facebook.com/tr?id=438345187662320&ev=PageView&noscript=1"
              /></noscript>`,
            }}
          ></script>
        </Head>
        <body>
          <Main />
          <NextScript />

          <script
            dangerouslySetInnerHTML={{
              __html: `<!-- VISA Tracking Code for pixelsbit.com -->
              (function(v,i,s,a){if(!v._visaSettings){v._visaSettings={};}v._visaSettings["8eb55897-0639-11ec-b589-901b0edac50a"]={v:"0.3",s:"8eb55897-0639-11ec-b589-901b0edac50a",a:"1"};_v=i.getElementsByTagName("body")[0];_a=_v;_i=i.createElement("script");_s=_i;_s.defer="defer";_s.src=s+a+v._visaSettings["8eb55897-0639-11ec-b589-901b0edac50a"].v;_a.appendChild(_s);})(window,document,"//app-worker.visitor-analytics.io/main",".js?s=8eb55897-0639-11ec-b589-901b0edac50a&v=")</script>
              <!-- VISA Tracking Code for pixelsbit.com -->`,
            }}
          ></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
