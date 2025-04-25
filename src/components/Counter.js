import React, { useEffect, useState } from "react";

const Counter = ({ target }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const updateCount = () => {
            let speed = 50;
            let increment = target / speed;
            let currentCount = 0;

            const interval = setInterval(() => {
                currentCount += increment;
                setCount(Math.ceil(currentCount));
                if (currentCount >= target) {
                    setCount(target);
                    clearInterval(interval);
                }
            }, 30);
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    updateCount();
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        const statElement = document.querySelector(".stat-number");
        if (statElement) {
            observer.observe(statElement);
        }

        return () => observer.disconnect();
    }, [target]);

    return <span className="stat-number">{count}</span>;
};

export default Counter;
