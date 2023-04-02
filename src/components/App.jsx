import { Component } from 'react';
import ImageGallery from './ImageGallery/ImageGallery';
import Searchbar from './Searchbar/Searchbar';
import Button from './Button/Button';
import FormApi from 'components/FormApi/FormApi';
import Loader from 'components/Loader/Loader';


class App extends Component {
  state = {
    gallery: [],
    total:0,
    searchWord:"",
    page: 0,
    perPage: 12,
    loading:false,
    loadMore:false,
    modalOpen:false
  };
 

  componentDidMount() {
    //   this.requestGallery()
    // FormApi(this.props.searchWord, this.state.page, this.state.perPage).then(
    //   data => this.setState({ gallery: data.data.hits })
    // );
    // console.log("mount")

  }



  componentDidUpdate(prevProps,prevState) {
    if(prevState.page!==this.state.page||prevState.searchWord!==this.state.searchWord) {
      console.log("loading")
      
        this.setState(()=>({ loading:true}))
        

    FormApi(this.state.searchWord, this.state.page, this.state.perPage).then(
      data => {this.setState((prev)=>({ 
        gallery: [...prev.gallery,...data.data.hits ]}))
        if((this.state.page*this.state.perPage)<data.data.totalHits) {
         this.setState(()=>({loadMore:true}))}
         else this.setState(()=>({loadMore:false}))
    
        }).catch(error=>console.log(error)).finally(this.setState(()=>({loading:false})))
        
        
    console.log("update")}
       

  }

  getQuery(searchWord) {
    console.log('search', searchWord);
    // this.setState({searchWord:searchWord });
    console.log("state getQuery",this.state);
    this.setState(()=>({searchWord:searchWord,page:1,gallery:[]}))
    // FormApi(searchWord, this.state.page, this.state.perPage).then(
    //   data => {this.setState(()=>({ 
    //     gallery: data.data.hits,
    //     total:data.data.totalHits }))
    //     if((this.state.page*this.state.perPage)<data.data.totalHits) {
    //      this.setState(()=>({loadMore:true}))}
    
    //     });

  }

  pageChange(){
    // if((this.state.page*this.state.perPage))
    this.setState((prev)=>({page:prev.page+1}))
    
  }

  render() {
    // FormApi(this.state.searchWord, this.state.page, this.state.perPage).then(
    //   data => {this.setState(()=>({ 
    //     gallery: data.data.hits,
    //     total:data.data.totalHits }))
    //     if((this.state.page*this.state.perPage)<data.data.totalHits) {
    //      this.setState(()=>({loadMore:true}))}
    
    //     });

    return (
      <>
        <Searchbar getQuery={this.getQuery.bind(this)} />
        {(this.state.loading)&&<Loader />}
        {(this.state.gallery.length!==0)&&<ImageGallery gallery={this.state.gallery}/>}
        {(this.state.loadMore)&&<Button pageIncrement={this.pageChange.bind(this)} />}
        {/* {(this.state.modalOpen)&&<Modal />} */}
      </>
    );
  }
}

export default App;
