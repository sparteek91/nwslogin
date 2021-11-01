export interface IProduct {
    id: number,
    vendor: number,
    product_name: string, 
    quantity: number, 
    is_outofstock: boolean,
    is_discontinued: boolean, 
    mrp: string, 
    discount: number,
    gst: string,  
    brand: string, 
    is_returnable: boolean, 
    is_processed: boolean,
    image: string
}