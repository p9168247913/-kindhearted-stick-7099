import React, {useState,useEffect} from 'react'
import { Container, Row } from 'react-bootstrap'
import { useSearchParams, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FetchWatch } from '../Redux/AppReducer/action';
import Image from 'react-bootstrap/Image';
import {CgHeart} from 'react-icons/cg'
import {TbGitCompare} from 'react-icons/tb'
import Accordion from 'react-bootstrap/Accordion';

const ShopArea = () => {
  const dispatch = useDispatch();
  const Watches = useSelector((store)=>store.allwatch);
  
  const [searchParams,setSearchParams] = useSearchParams();
  const initialCategory=searchParams.getAll('category');
  const [category,setCategory]=useState(initialCategory||[]);

  // const [searchParams] = useSearchParams()

  const location=useLocation();

  const handleClick=(e)=>{
    const option=e.target.value;
    let newCategory=[...category];
    if(newCategory.includes(option)){
      newCategory.splice(newCategory.indexOf(option),1);
    }else{
      newCategory.push(option)
    }
    setCategory(newCategory)
  }

  useEffect(()=>{
    dispatch(FetchWatch);
  },[])

  useEffect(()=>{
    let params={}
    params.category=category
    setSearchParams(params)
      // if(category){
      //   category&&(params.category=category)
      // setSearchParams(params)
      // }
  },[category, setSearchParams]);

  useEffect(()=>{
    if(Watches.length === 0 || location){
      const getParams={
        params:{
          category:searchParams.getAll("category"),
        }
      }
      console.log(getParams)
      dispatch(FetchWatch(getParams));
    }
  },[location.search]);

  return (
    <div>
        <Container className='shop-area' fluid>
            <Row className='Filters'>
                {/* <h1>Filters</h1> */}
                <div data-testid="filter-category">
                    <div>
                      <input
                      onChange={handleClick}
                      defaultChecked={category.includes("Fire Boltt")}
                      type="checkbox"
                      value="Fire Boltt" />
                      <label>Fire Boltt</label>
                    </div>
                    <div>
                      <input 
                      onChange={handleClick}
                      defaultChecked={category.includes("Hammer")}
                      type="checkbox" 
                      value="Hammer" />
                      <label>Hammer</label>
                    </div>
                    <div>
                      <input
                      onChange={handleClick}
                      defaultChecked={category.includes("Noise")}
                      type="checkbox" 
                      value="Noise" />
                      <label>Noise</label>
                    </div>
                    <div>
                      <input 
                      onChange={handleClick}
                      defaultChecked={category.includes("boAt")}
                      type="checkbox" 
                      value="boAt" />
                      <label>boAt</label>
                    </div>
                    <div>
                      <input 
                      onChange={handleClick}
                      defaultChecked={category.includes("Apple")}
                      type="checkbox" 
                      value="Apple" />
                      <label>Apple</label>
                    </div>
                    
                  </div>
                <Accordion className='mb-2'>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>Features</Accordion.Header>
                        <Accordion.Body>
                          <div>
                            <input
                            onChange={handleClick}
                            defaultChecked={category.includes("Sneakers")}
                            type="checkbox"
                            value="Sneakers" />
                            <label>Sneakers</label>
                          </div>
                          <div>
                            <input 
                            onChange={handleClick}
                            defaultChecked={category.includes("Loafers")}
                            type="checkbox" 
                            value="Loafers" />
                            <label>Loafers</label>
                            </div>
                          <div>
                            <input
                              onChange={handleClick}
                            defaultChecked={category.includes("Canvas")}
                            type="checkbox" 
                            value="Canvas" />
                            <label>Canvas</label>
                          </div>
                          <div>
                            <input 
                            onChange={handleClick}
                            defaultChecked={category.includes("Boots")}
                            type="checkbox" 
                            value="Boots" />
                            <label>Boots</label>
                          </div>
                      </Accordion.Body>
                    </Accordion.Item>
                </Accordion>

                <Accordion className='mb-2'>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>TV Operating Systems</Accordion.Header>
                        <Accordion.Body>
                          <div>
                            <input
                            onChange={handleClick}
                            defaultChecked={category.includes("Sneakers")}
                            type="checkbox"
                            value="Sneakers" />
                            <label>Sneakers</label>
                          </div>
                          <div>
                            <input 
                            onChange={handleClick}
                            defaultChecked={category.includes("Loafers")}
                            type="checkbox" 
                            value="Loafers" />
                            <label>Loafers</label>
                            </div>
                          <div>
                            <input
                              onChange={handleClick}
                            defaultChecked={category.includes("Canvas")}
                            type="checkbox" 
                            value="Canvas" />
                            <label>Canvas</label>
                          </div>
                          <div>
                            <input 
                            onChange={handleClick}
                            defaultChecked={category.includes("Boots")}
                            type="checkbox" 
                            value="Boots" />
                            <label>Boots</label>
                          </div>
                      </Accordion.Body>
                    </Accordion.Item>
                </Accordion>

                <Accordion className='mb-2'>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>No of HDMI Ports</Accordion.Header>
                        <Accordion.Body>
                          <div>
                            <input
                            onChange={handleClick}
                            defaultChecked={category.includes("Sneakers")}
                            type="checkbox"
                            value="Sneakers" />
                            <label>Sneakers</label>
                          </div>
                          <div>
                            <input 
                            onChange={handleClick}
                            defaultChecked={category.includes("Loafers")}
                            type="checkbox" 
                            value="Loafers" />
                            <label>Loafers</label>
                            </div>
                          <div>
                            <input
                              onChange={handleClick}
                            defaultChecked={category.includes("Canvas")}
                            type="checkbox" 
                            value="Canvas" />
                            <label>Canvas</label>
                          </div>
                          <div>
                            <input 
                            onChange={handleClick}
                            defaultChecked={category.includes("Boots")}
                            type="checkbox" 
                            value="Boots" />
                            <label>Boots</label>
                          </div>
                      </Accordion.Body>
                    </Accordion.Item>
                </Accordion>

                <Accordion className='mb-2'>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>No of USB Ports</Accordion.Header>
                        <Accordion.Body>
                          <div>
                            <input
                            onChange={handleClick}
                            defaultChecked={category.includes("Sneakers")}
                            type="checkbox"
                            value="Sneakers" />
                            <label>Sneakers</label>
                          </div>
                          <div>
                            <input 
                            onChange={handleClick}
                            defaultChecked={category.includes("Loafers")}
                            type="checkbox" 
                            value="Loafers" />
                            <label>Loafers</label>
                            </div>
                          <div>
                            <input
                              onChange={handleClick}
                            defaultChecked={category.includes("Canvas")}
                            type="checkbox" 
                            value="Canvas" />
                            <label>Canvas</label>
                          </div>
                          <div>
                            <input 
                            onChange={handleClick}
                            defaultChecked={category.includes("Boots")}
                            type="checkbox" 
                            value="Boots" />
                            <label>Boots</label>
                          </div>
                      </Accordion.Body>
                    </Accordion.Item>
                </Accordion>

                <Accordion className='mb-2'>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>Screen Size</Accordion.Header>
                        <Accordion.Body>
                          <div>
                            <input
                            onChange={handleClick}
                            defaultChecked={category.includes("Sneakers")}
                            type="checkbox"
                            value="Sneakers" />
                            <label>Sneakers</label>
                          </div>
                          <div>
                            <input 
                            onChange={handleClick}
                            defaultChecked={category.includes("Loafers")}
                            type="checkbox" 
                            value="Loafers" />
                            <label>Loafers</label>
                            </div>
                          <div>
                            <input
                              onChange={handleClick}
                            defaultChecked={category.includes("Canvas")}
                            type="checkbox" 
                            value="Canvas" />
                            <label>Canvas</label>
                          </div>
                          <div>
                            <input 
                            onChange={handleClick}
                            defaultChecked={category.includes("Boots")}
                            type="checkbox" 
                            value="Boots" />
                            <label>Boots</label>
                          </div>
                      </Accordion.Body>
                    </Accordion.Item>
                </Accordion>

                 <Accordion className='mb-2'>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>Display Type</Accordion.Header>
                        <Accordion.Body>
                          <div>
                            <input
                            onChange={handleClick}
                            defaultChecked={category.includes("Sneakers")}
                            type="checkbox"
                            value="Sneakers" />
                            <label>Sneakers</label>
                          </div>
                          <div>
                            <input 
                            onChange={handleClick}
                            defaultChecked={category.includes("Loafers")}
                            type="checkbox" 
                            value="Loafers" />
                            <label>Loafers</label>
                            </div>
                          <div>
                            <input
                              onChange={handleClick}
                            defaultChecked={category.includes("Canvas")}
                            type="checkbox" 
                            value="Canvas" />
                            <label>Canvas</label>
                          </div>
                          <div>
                            <input 
                            onChange={handleClick}
                            defaultChecked={category.includes("Boots")}
                            type="checkbox" 
                            value="Boots" />
                            <label>Boots</label>
                          </div>
                      </Accordion.Body>
                    </Accordion.Item>
                </Accordion>

            </Row>

            <Row className='prod-grid'>
               {/* <h1> Products </h1> */}
              {Watches?.length>0 && Watches.map(e=>{
                return <div key={e.id} className=''>
                    <div className='shop-card'>
                        <Image src={e.img1} width='100%'/>
                        <p className='product-name'>{e.name}</p>
                        {/* <h3>{e.brand}</h3> */}
                        <p className='card-details'>Deal Price. {e.dealpricex}</p>
                        <p className='card-details'>M.R.P. {e.MRPx}</p>
                        <p className='card-details'>You Save. {e.discountx} (₹{e.MRP - e.dealprice})</p>
                        <label className='offer-label'>Offer Avaialble</label>
                        <div>
                            <button className='card-buttons'><TbGitCompare className='card-button-ico'/> Compare</button>
                            <button className='card-buttons'><CgHeart className='card-button-ico'/> Wishlist</button>
                        </div>
                    </div>
                </div>
              })}

            </Row>
        </Container>
    </div>
  )
}

export default ShopArea