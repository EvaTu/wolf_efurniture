

import Directory from "../../components/directory/directory.component"


const Home = () => {
  const categories = [
    {
    id: 1, 
    title: "BEDROOM",
    url:"https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F80%2Fa3%2F80a3ba8a9a0e602630592074ae35d3db94e0d5c9.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BENVIRONMENT%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main]"
    },
    {
      id: 2, 
      title: "LIVINGROOM",
      url:"https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fdc%2F08%2Fdc08854232ce1078eaf85f2914399522256f407a.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BENVIRONMENT%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]"
    },
    {
      id: 3, 
      title: "BATHROOM",
      url:"https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F05%2Fac%2F05acc30af9e7bfe38ae1754413e8452ee00eabe4.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BENVIRONMENT%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main]"
    },
    {
      id: 4, 
      title: "KITCHEN",
      url:"https://lp2.hm.com/hmgoepprod?set=source[/a9/e1/a9e1034f11bd2bacde7243daf2f981461d229958.jpg],origin[dam],category[],type[ENVIRONMENT],res[y],hmver[1]&call=url[file:/product/main]"
    },
    {
      id: 5, 
      title: "OUTDOOR",
      url:"https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F48%2F16%2F48167c512d32453952bb8f1cba0c59e9a9a0aae2.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BENVIRONMENT%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]"
    },

  ]

  return (
   <Directory categories={categories}/>
  );
}

export default Home;