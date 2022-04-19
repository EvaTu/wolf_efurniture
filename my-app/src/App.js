
import Directory from "./components/directory/directory.component"

const App = () => {

  const categories = [ 
    {
      "id": 1,
      "title": 'BEDROOM',
      "imageUrl": "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F78%2F1d%2F781d11080aab19e80c7587f01445600f472b3a09.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bhome_bedroom_duvetcoversets_double%5D%2Ctype%5BENVIRONMENT%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main]"
    }, 
    {
      "id": 2,
      "title": 'LIVINGROOM',
      "imageUrl": "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fdc%2F08%2Fdc08854232ce1078eaf85f2914399522256f407a.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BENVIRONMENT%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]"
    }, 
    {
      "id": 3,
      "title": 'BATHROOM',
      "imageUrl": "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fca%2Fe2%2Fcae2502f4236dd8d388d2e90d130f73c69eb76a4.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BENVIRONMENT%5D%2Cres%5Bm%5D%2Chmver%5B4%5D&call=url[file:/product/main]"
    }, 
    {
      "id":4,
      "title": 'KITCHEN',
      "imageUrl": "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Ff4%2F0e%2Ff40e436f079cebc2ccf1858e607bb800f9e62aef.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BENVIRONMENT%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]"
    }, 
    {
      "id": 5,
      "title":'OUTDOOR',
      "imageUrl": "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F52%2F3d%2F523d2b9781ec0178ba9c6067573f538321d93611.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BENVIRONMENT%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]"
    }
  ]
  

  return (
    
    <Directory categories={categories}/>
    
    
    )
    
}

export default App;
