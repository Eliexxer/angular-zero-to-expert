import { Pipe, PipeTransform } from '@angular/core';
import { environment } from '@environments/environment.development';

@Pipe({
  name: 'productImage',
})
export class ProductImagePipe implements PipeTransform {
  transform(images: string | string[]): string {
    const baseUrl = environment.baseUrl
    if (typeof images === 'string') {
      return `${baseUrl}/files/product/${images}`
    }
    if (!images || images.length === 0) {
      return 'public/assets/images/no-image.jpg';
    }
    const firstimage = images[0];
    const imageUrl = `${baseUrl}/files/product/${firstimage}`
    return imageUrl;
  }
}
