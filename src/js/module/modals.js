const buttons = document.querySelectorAll('[data-modal]');
const forms = document.querySelectorAll('.form');
const body = document.body;

export function showModals() {
	buttons.forEach((el) => {
		let modalId = el.dataset.modal
		let modalBlock = document.querySelector(`${modalId}`);
		let overlayBlock = modalBlock.querySelector('.modal__overlay')
		let form = modalBlock.querySelector('.form');

		el.addEventListener('click', () => {
			if (el.classList.contains('close')) {
				closeModal();
			} else {
				openModal()
			}
		});

		form.addEventListener('submit', (evt) => {
			evt.preventDefault();
			closeModal();
		});

		overlayBlock.addEventListener('click', closeModal);
		window.addEventListener('resize', closeModal);

		document.addEventListener('keydown', function (evt) {
			// Проверяем, что код клавиши равен 27
			if (evt.keyCode === 27) {
				closeModal()
			}
		});

		function openModal() {
			body.classList.add('lock');
			modalBlock.classList.add('show');
		}

		function closeModal() {
			body.classList.remove('lock');
			modalBlock.classList.remove('show');
		}
	});
}