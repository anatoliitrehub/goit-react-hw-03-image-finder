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

  shouldComponentUpdate(newProps,newState){
    if(newState.modalOpen!==this.state.modalOpen) return false
    return true
  }

  componentDidUpdate(prevProps,prevState) {
    if(prevState.page!==this.state.page||prevState.searchWord!==this.state.searchWord) {
      this.setState(()=>({loading:true}));

      // console.log("loading", this.state.loading)
      
        // this.setState(()=>({ loading:true}))
        
    const fetchApi = async () => await FormApi(this.state.searchWord, this.state.page, this.state.perPage);
      
    this.setState(()=>({loading:true}));
    // console.log("loading", this.state.loading)

        // .finally(this.setState(()=>({loading:false})))
        
        fetchApi().then(
          data => {this.setState((prev)=>({ 
            gallery: [...prev.gallery,...data.data.hits ]}))
            if((this.state.page*this.state.perPage)<data.data.totalHits) {
             this.setState(()=>({loadMore:true}))}
             else this.setState(()=>({loadMore:false}))
             this.setState(()=>({loading:false}))
        
            }).catch(error=>console.log(error))
            // .finally(this.setState(()=>({loading:false}))) 
            // console.log("loading", this.state.loading)

              //  console.log("App update")
              }
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
    this.setState(()=>({modalOpen:false}))
  }
 
  render() {
    
    return (
      <>
        <Searchbar getQuery={this.getQuery.bind(this)} />
        {(this.state.gallery.length!==0)&&<ImageGallery gallery={this.state.gallery} activeImg={this.activeImg.bind(this)}/>}
        {(this.state.loading)&&<Loader />}
        {(this.state.loadMore)&&<Button pageIncrement={this.pageChange.bind(this)} />}
        {(this.state.modalOpen)&&<Modal gallery={this.state.gallery} imgId={this.state.activeId} modalClose={this.handlerModalClose.bind(this)}/>}
      </>
    );
  }
}

export default App;
