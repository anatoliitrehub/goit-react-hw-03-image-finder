import { Component } from 'react';
import ImageGallery from './ImageGallery/ImageGallery';
import Searchbar from './Searchbar/Searchbar';
import Button from './Button/Button';
import FormApi from 'components/FormApi/FormApi';
import Loader from 'components/Loader/Loader';
import Modal from './Modal/Modal';


class App extends Component {
  state = {
    gallery: [],
    total:0,
    searchWord:"",
    page: 0,
    perPage: 12,
    loading:false,
    loadMore:false,
    modalOpen:false,
    activeId:0,
  };
 

  componentDidMount() {
    
    // console.log("mount")

  }

  componentDidUpdate(prevProps,prevState) {
    if(prevState.page!==this.state.page||prevState.searchWord!==this.state.searchWord) {
      console.log("loading", this.state.loading)
      
        // this.setState(()=>({ loading:true}))
        

    const fetchApi = async () => await FormApi(this.state.searchWord, this.state.page, this.state.perPage).then(
      data => {this.setState((prev)=>({ 
        gallery: [...prev.gallery,...data.data.hits ]}))
        if((this.state.page*this.state.perPage)<data.data.totalHits) {
         this.setState(()=>({loadMore:true}))}
         else this.setState(()=>({loadMore:false}))
    
        }).catch(error=>console.log(error))
        // .finally(this.setState(()=>({loading:false})))
        
        fetchApi().finally(this.setState(()=>({loading:false}))) 
    console.log("App update")}
        }

  getQuery(searchWord) {
    this.setState(()=>({
      searchWord:searchWord,
      page:1,
      gallery:[],
      loading:true
    }))

  }

  pageChange(){
    // if((this.state.page*this.state.perPage))
    this.setState((prev)=>({page:prev.page+1}))
   
  }

  activeImg(id){
    // console.log("active",id)
    this.setState(()=>({
      activeId:id,
    modalOpen:true}))

  }

  handlerModalClose(e){
    console.log("keyb",e)
    this.setState(()=>({modalOpen:false}))
  }
 
  render() {
    
    return (
      <>
        <Searchbar getQuery={this.getQuery.bind(this)} />
        {(this.state.loading)&&<Loader />}
        {(this.state.gallery.length!==0)&&<ImageGallery gallery={this.state.gallery} activeImg={this.activeImg.bind(this)}/>}
        {(this.state.loadMore)&&<Button pageIncrement={this.pageChange.bind(this)} />}
        {(this.state.modalOpen)&&<Modal gallery={this.state.gallery} imgId={this.state.activeId} modalClose={this.handlerModalClose.bind(this)}/>}
      </>
    );
  }
}

export default App;
