import ErrorPage from "../src/pages/ErrorPage";
import { jest } from "@jest/globals";
import { describe, it, expect } from "vitest";
jest.mock("react-router-dom", () => ({
  Link: jest.fn(),
}));

describe("ErrorPage", () => {
  it("should render Navbar and Footer components", () => {
    render(<ErrorPage />);

    expect(screen.getByRole("navigation")).toBeInTheDocument();
    expect(screen.getByText("Footer")).toBeInTheDocument();
  });

  it("should render 404 image and text", () => {
    render(<ErrorPage />);

    expect(screen.getByAltText("HALAMAN TIDAK DITEMUKAN!")).toBeInTheDocument();
    expect(screen.getByText("HALAMAN TIDAK DITEMUKAN!")).toBeInTheDocument();
    expect(
      screen.getByText(
        "Berhati hati lah saat mengujungi sebuah halaman, banyak hal yang tidak terduga!!"
      )
    ).toBeInTheDocument();
  });

  it("should render Utama button with correct link", () => {
    const LinkMock = jest.fn();
    LinkMock.mockReturnValue(<button>Utama</button>);

    jest.mock("react-router-dom", () => ({
      Link: LinkMock,
    }));

    render(<ErrorPage />);

    const button = screen.getByText("Utama");
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute("href", "/");
  });
});
