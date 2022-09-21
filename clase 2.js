const d = document,
$shows= d.getElementById("app"),
$template = d.getElementById("show-template").content,
$fragment = d.createDocumentFragment();

d.addEventListener("keypress",async e=>{
if(e.target.matches("#buscador")){
  //console.log(e.key)
  if(e.key){
    try{
      $shows.innerHTML= `Buscando...`;
      let query= e.target.value.toLowerCase();
      let api=`https://api.tvmaze.com/search/shows?q=${query}`;
      let res = await fetch(api);
      let json = await res.json();
      //console.log(api,res,json)
      if(!res.ok) throw {status: res.status, statusText: res.statusText}
      if (json.length === 0){
        $shows.innerHTML= `<h2> No existen resultados para la busqueda de ${query}</h2> `
      }
      else{
        json.forEach(el => {
          $template.querySelector("h3").textContent = el.show.name;
          
          $template.querySelector("img").src = el.show.image ? el.show.image.medium : "http://static.tvmaze.com/images/no-img/no-img-portrait-text.png";
          $template.querySelector("img").style.maxWidth = "100%";
          $template.querySelector("a").href = el.show.url? el.show.url : "#";
          $template.querySelector("a").target = el.show.url?"_blank": "_self";
          $template.querySelector("a").textContent = el.show.url? "ver mas...": "";
          let $clone= d.importNode($template, true);
          $fragment.appendChild($clone);
          });

        $shows.innerHTML = "",
        $shows.appendChild($fragment)
      }
    }
    catch(err){
      console.log(err);
      let mensaje= err.statusText || "ocurrio un error"
      $shows.innerHTML = `<p>Error ${err.status}: ${mensaje}</p>`
    }
  }
}
})