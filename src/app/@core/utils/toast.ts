import Swal from 'sweetalert2';

export const Toast = Swal.mixin({
	toast: true,
	position: 'bottom-end',
	showConfirmButton: false,
	customClass: 'toast-custom',
	timer: 3000,
	timerProgressBar: false,
	showCloseButton: true,
	didOpen: (toast) => {
		toast.addEventListener('mouseenter', Swal.stopTimer);
		toast.addEventListener('mouseleave', Swal.resumeTimer);
	}
});

export function ToastHTML(type: 'success' | 'error' | 'waving-hand', title: string, description: string) {
	const toastHTML = `<div class="d-flex align-items-center">
	<img src="assets/images/icon/${type}.svg" alt="${type}">
	<h3 class="px-3 mb-0">${title}</h3>
	</div>
	<hr class="my-3">
	<p class="mb-0">${description}</p>`;
	return toastHTML;
}

export const ToastConfirm = Swal.mixin({
	showCancelButton: true,
	cancelButtonText: 'Cancel',
	showCloseButton: true,
	buttonsStyling: false,
	reverseButtons: true,
	padding: '1rem',
	heightAuto: false,
	customClass: {
		confirmButton: 'btn btn-outline-primary',
		cancelButton: 'btn btn-light',
		actions: 'd-flex flex-gap w-100 justify-content-end',
		popup: 'justify-content-start align-items-star text-start',
		htmlContainer: 'm-0 text-start mb-2 pe-4',
		input: 'form-control m-0',
		closeButton: 'confirm-close',
		title: 'h5 text-start mb-3 p-0 pe-4'
	},
})


