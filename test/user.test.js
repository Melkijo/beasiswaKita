import { render, screen } from "@testing-library/react";
import User from "../pages/UserBeasiswa";
import { useNavigate } from "react-router-dom";
import { useAtom } from "jotai";
import { jest } from "@jest/globals";
import { describe, it, expect } from "vitest";
jest.mock("react-router-dom", () => ({
    useNavigate: jest.fn(),
}));

jest.mock("jotai", () => ({
    useAtom: jest.fn(),
}));

describe("User", () => {
    it("should redirect to root page if user is admin", () => {
        const navigate = jest.fn();
        useNavigate.mockReturnValue(navigate);

        const authAtomMock = {
            current: {
                token: import.meta.env.VITE_ADMIN_COOK,
            },
        };
        useAtom.mockReturnValue([authAtomMock]);

        render(<User />);

        expect(navigate).toHaveBeenCalledWith("/");
    });

    it("should redirect to root page if user is not logged in", () => {
        const navigate = jest.fn();
        useNavigate.mockReturnValue(navigate);

        const authAtomMock = {
            current: {
                token: undefined,
            },
        };
        useAtom.mockReturnValue([authAtomMock]);

        render(<User />);

        expect(navigate).toHaveBeenCalledWith("/");
    });

    it("should render UserSidebar if user is logged in", () => {
        const authAtomMock = {
            current: {
                token: "valid token",
            },
        };
        useAtom.mockReturnValue([authAtomMock]);

        render(<User />);

        expect(screen.getByText("UserSidebar")).toBeInTheDocument();
    });
});