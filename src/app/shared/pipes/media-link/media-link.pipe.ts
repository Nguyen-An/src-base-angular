import { Pipe, PipeTransform } from '@angular/core';
import { environment } from '@env/environment';

@Pipe({
	name: 'mediaLink',
	pure: false
})
export class MediaLinkPipe implements PipeTransform {
	transform(value: string, type: 'video' | 'image'  = 'image'): string {
		if (!value) {
			return 'assets/images/logo/lenddle-logo.svg';
		}
		const isVideo: boolean = type === 'video';
		const s3_url = environment.S3_URL;
		return `${s3_url}/${value}${isVideo ? '#t=0.001' : ''}`;
	}
}
