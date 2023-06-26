# React.js Dynamic Table App

**Opis projektu:** Ten projekt to aplikacja React.js, która pobiera dane z punktu końcowego API i wyświetla je w dynamicznej tabeli. Tabela ma wiele kolumn, które przedstawiają autorów i ich książki. Aplikacja zawiera również dodatkowe funkcje, takie jak wybieranie wierszy, wyświetlanie szczegółowych danych dotyczących wybranego wiersza, nawigacja za pomocą breadcrumbów itp.

## Funkcje

- **Pobieranie danych:** Aplikacja pobiera dane z punktu końcowego API, takiego jak Google Books API, aby wypełnić tabelę informacjami o autorach i ich książkach.

- **Dynamiczna tabela:** Komponent dynamicznej tabeli renderuje pobrane dane w formacie tabelarycznym z wieloma kolumnami. Każdy wiersz reprezentuje jednego autora, a kolumny wyświetlają odpowiednie informacje, takie jak nazwa autora i inne szczegóły.

- **Wybieranie wierszy:** Użytkownicy mogą wybierać wiersze w tabeli, a wybrany wiersz jest wyróżniony wizualnie.

- **Wyświetlanie szczegółowych danych:** Po wybraniu wiersza aplikacja wyświetla szczegółowe informacje dotyczące wybranego autora. Informacje są wyświetlane w oddzielej sekcji.

- **Nawigacja za pomocą breadcrumbów:** Aplikacja implementuje nawigację za pomocą breadcrumbów, aby pokazywać ścieżkę lub hierarchię wybranego wiersza. Umożliwia to użytkownikom łatwe zrozumienie ścieżki nawigacji i identyfikację bieżącej lokalizacji w tabeli.

- **Nawigacja breadcrumbów:** Użytkownicy mogą nawigować do poprzednich poziomów za pomocą nawigacji breadcrumbów. Ta funkcja ułatwia użytkownikom powrót lub eksplorację różnych poziomów tabeli.

- **Stylizacja:** Aplikacja stosuje odpowiednie style za pomocą CSS lub frameworka CSS, takiego jak Tailwind CSS aby interfejs był atrakcyjny wizualnie i przyjazny dla użytkownika.

- **Testowanie:** Aplikacja jest testowana. Wykonywane są testy jednostkowe i integracyjne.

## Instalacja

Aby skonfigurować aplikację React.js Dynamic Table, wykonaj następujące kroki:

1. Sklonuj repozytorium:

git clone https://github.com/twoje-repozytorium.git

2. Przejdź do katalogu projektu:

cd table-react

3. Zainstaluj wymagane zależności:

npm install

4. Dodaj plik .env 

VITE_KEY = twoj osobisty klucz dostepu do strony
VITE_BASE_URL = https://www.googleapis.com/books/v1

## Użycie

Uruchom serwer deweloperski:

npm run dev || npm run dev -- --host

Następnie wejdź w link podany w consoli

## Testowanie

Aby uruchomić testy dla aplikacji React.js Dynamic Table, użyj następującej komendy:

npm test

Ta komenda wykona testy jednostkowe i integracyjne, aby zapewnić poprawne działanie aplikacji i zgodność z oczekiwaniami.

## Decyzje Projektowe 

Podczas tworzenia projektu podjęto następujące decyzje projektowe:

-Wybrano framework React.js wraz z Typescript ze względu na jego popularność, elastyczność i rozbudowaną społeczność.

-Wykorzystano API Google Books do pobierania danych autorów i ich książek ze względu na jego bogatą kolekcję danych książkowych.

-Zastosowano bibliotekę Tailwind CSS do szybkiego i skutecznego stylizowania komponentów aplikacji.

-Wykorzystano bibliotekę React Router do obsługi nawigacji i implementacji breadcrumbów.

-Do testowania aplikacji wykorzystano bibliotekę Testing Library ze względu na jej łatwość użycia, wsparcie dla testów jednostkowych i integracyjnych oraz szeroką społeczność.

-Zaimplementowano testy za pomocą biblioteki Vite+Test, która integruje Testing Library z frameworkiem Vite, umożliwiając wygodne i efektywne testowanie komponentów.

## Planowane rozszczenia

W przyszłości planuję dodać kilka rozszerzeń do tej aplikacji, takich jak:

Możliwość dodawania nowych autorów i książek za pośrednictwem formularza.
Implementacja sortowania i filtrowania danych w tabeli.
Dodanie funkcji paginacji dla większych zbiorów danych.
Udoskonalenie responsywności aplikacji, aby lepiej działała na urządzeniach mobilnych.
Cieszę się, że miałem okazję pracować nad tym projektem, i jestem otwarty na wszelkie sugestie i wkład, który może przyczynić się do dalszego rozwoju aplikacji.
