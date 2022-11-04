# React Native BackHandler
<img style = "float:right; width: 230px; margin: 0px 0px 10px 10px;" src="../week1/images/subway_video.gif">

Merhaba ! 

Bu ufak yazıda React Native'de Android'e özel API'lardan biri olan BackHandler API'ı ele alacağım. 


## 💁‍♂️ Açıklama
---
BackHandler API, Android telefonlarda bulunan fiziksel geri tuşu (return) için bir event listener ekler ve bu şekilde,  bu tuşa basıldığında uygulamanın nasıl davranacağına karar verilebilinir.

## 📚 Kullanabileceğimiz Metodlar
---
## addEventListener()
    static addEventListener(eventName, handler)

## exitApp()
    static exitApp()
## removeEventListener()
    static removeEventListener(eventName, handler)
    

## 📝 Şablon
---


       BackHandler.addEventListener('hardwareBackPress', function() {


            if(!this.geriDonemem()){
                this.geriDon();
                
                /* geri tuşunu kullanmada herhangi bir sorun olmayan sayfalar için bu kodu çalıştırırız. 
                
                bu aşamada true olarak return verdiğimiz için, diğer fonksiyonlar çalışmaz.
                */


                return true;
            }

            /* False return ederek eventListener'daki diğer fonksiyonların çalışmasını ya da işletim sisteminin default olarak içerisindeki geri dönme tuşu fonksiyonunu çalıştıracaktır.

            return false;

    })
## 💡 Örnek
---
![ornekimg](/week1/images/ornek.png)
