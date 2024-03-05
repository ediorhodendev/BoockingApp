
import { BookingService } from 'src/booking.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.component.html',
  styleUrls: ['./booking-list.component.css']
})
export class BookingListComponent implements OnInit {
  bookings: any[] = []; // Certifique-se de que o tipo de dados corresponda ao que é retornado pelo serviço
  searchResult: any; // Certifique-se de que o tipo de dados corresponda ao que é retornado pelo serviço
  searchId: Number = 0;
  

  
  
  @ViewChild('searchIdInput') searchIdInput!: ElementRef<HTMLInputElement>; 

  constructor(private bookingService: BookingService) { }

  ngOnInit(): void {
    this.getAllBookings(); // Chame a função para carregar todas as reservas ao iniciar o componente
  }

  getAllBookings() {
    this.bookingService.getAllBookings().subscribe(
      (data: any[]) => {
        this.bookings = data;
      },
      error => {
        console.error('Erro ao buscar reservas:', error);
      }
    );
  }
  listarTodos(): void {
    
    this.bookingService.getAllBookings()
      .subscribe(bookings => {
        this.bookings = bookings;
        this.searchResult = undefined;
      });
  }
  deletarRegistro(id: number): void {
    if (confirm(`Tem certeza que deseja deletar o registro com ID ${id}?`)) {
        this.bookingService.deleteBooking(id)
            .subscribe(() => {
                // Remove o registro deletado da lista de reservas
                this.bookings = this.bookings.filter(booking => booking.id !== id);
                // Limpa o resultado da busca
                this.searchResult = undefined;
            });
    }
}



  buscarPorId(): void {
    const searchId = parseInt(this.searchIdInput.nativeElement.value, 10); // Converte a string para um número inteiro
    this.bookingService.getBookingById(searchId).subscribe(
      (booking: any) => {
        if (booking) {
          if (booking.customer && booking.vehicle) {
            // Se o cliente e o veículo estiverem populados, atribua os dados da reserva ao searchResult
            this.searchResult = booking;
          } else {
            // Se o cliente ou o veículo estiverem ausentes, exiba uma mensagem de erro
            alert(`Reserva com ID ${searchId} está incompleta. Verifique os dados do cliente e do veículo.`);
          }
        } else {
          // Se a reserva não for encontrada, exiba uma mensagem de erro
          alert(`Reserva com ID ${searchId} não encontrada.`);
        }
      },
      (error: any) => {
        // Se ocorrer um erro ao buscar a reserva, exiba uma mensagem de erro
        console.error("Erro ao buscar reserva por ID:", error);
        alert(`Erro ao buscar reserva por ID: ${searchId}, verifique o ID digitado.`);
      }
    );
  }
  

  
  

  formatarData(dateString: string): string {
    // Implemente a lógica de formatação de data aqui, se necessário
    return new Date(dateString).toLocaleDateString(); // Exemplo simples: apenas converte para formato de data local
  }
}
